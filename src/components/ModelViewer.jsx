import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const screenShader = {
  uniforms: {
    time: { value: 0 },
    isOn: { value: 0.0 } 
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float time;
    uniform float isOn;

    float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void main() {
      vec2 seed = vUv + fract(time);
      float noise = rand(seed);
      float scanline = sin(vUv.y * 800.0 - time * 50.0) * 0.1;
      vec3 color = vec3(noise * 0.4, noise * 0.8, noise * 0.9);
      
      vec3 finalColor = (color - scanline) * isOn;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Sub-componente para animar luces y el color de fondo sin recargar todo
function SceneLighting({ isScreenOn }) {
  const lightRef = useRef();
  const dirLightRef = useRef();

  useFrame((state) => {
    // Luces tenues cuando la PC está encendida para que destaque la emisión
    const targetAmbient = isScreenOn ? 0.1 : 1.5;
    const targetDir = isScreenOn ? 0.2 : 2.0;
    
    if (lightRef.current) {
      lightRef.current.intensity += (targetAmbient - lightRef.current.intensity) * 0.1;
    }
    if (dirLightRef.current) {
      dirLightRef.current.intensity += (targetDir - dirLightRef.current.intensity) * 0.1;
    }

    // Transición suave del fondo (blanco a gris muy oscuro)
    if (state.scene.background) {
      const targetColor = isScreenOn ? new THREE.Color('#111111') : new THREE.Color('#ffffff');
      state.scene.background.lerp(targetColor, 0.05);
    } else {
      state.scene.background = new THREE.Color('#ffffff');
    }
  });

  return (
    <>
      <ambientLight ref={lightRef} intensity={1.5} />
      <directionalLight ref={dirLightRef} position={[10, 10, 5]} intensity={2} />
    </>
  );
}

function Model({ url, isScreenOn, setIsScreenOn }) {
  const { scene } = useGLTF(url);
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  
  const materialRef = useRef(new THREE.ShaderMaterial(screenShader));
  const monitorRef = useRef(null);
  const jumpAnim = useRef(0); 

  const numbersRef = useRef(null);
  const numbersMaterial = useRef(new THREE.MeshStandardMaterial({
    color: 0x00ff00,       
    emissive: 0x00ff00,    
    emissiveIntensity: 2,  
    transparent: true,
    opacity: 1
  }));

  useEffect(() => {
    scene.traverse((child) => {
      if (child.name.includes("PC_screen")) {
        if (child.isMesh) child.material = materialRef.current;
        else child.children.forEach(c => { if (c.isMesh) c.material = materialRef.current; });
      }
      
      if (child.name.includes("PC_monitor") && !monitorRef.current) {
        monitorRef.current = child;
        if (child.userData.originalY === undefined) {
          child.userData.originalY = child.position.y;
        }
      }

      if (child.name.includes("Numbers") && !numbersRef.current) {
        numbersRef.current = child;
        if (child.isMesh) child.material = numbersMaterial.current;
        else child.children.forEach(c => { if (c.isMesh) c.material = numbersMaterial.current; });
        
        if (child.userData.originalScale === undefined) {
          child.userData.originalScale = child.scale.clone();
        }
        child.visible = false;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      const targetOn = isScreenOn ? 1.0 : 0.0;
      materialRef.current.uniforms.isOn.value += (targetOn - materialRef.current.uniforms.isOn.value) * 0.1;
    }

    if (groupRef.current) {
      if (hovered) {
        // Simplemente dejamos de sumar rotación para que se quede quieta
      } else {
        groupRef.current.rotation.y += delta * 0.5;
      }
    }

    if (jumpAnim.current > 0) {
      jumpAnim.current -= delta * 3.5; 
      if (jumpAnim.current < 0) jumpAnim.current = 0;

      const arc = Math.sin(jumpAnim.current * Math.PI); 
      
      if (monitorRef.current) {
        const jumpHeight = arc * 0.7; 
        monitorRef.current.position.y = monitorRef.current.userData.originalY + jumpHeight;
        const stretch = 1.0 + (arc * 0.3);
        const squash = 1.0 - (arc * 0.15);
        monitorRef.current.scale.set(squash, stretch, squash);
      }

      if (numbersRef.current) {
        numbersRef.current.visible = true;
        numbersRef.current.scale.copy(numbersRef.current.userData.originalScale).multiplyScalar(arc);
      }

    } else {
      if (monitorRef.current) {
        monitorRef.current.position.y = monitorRef.current.userData.originalY;
        monitorRef.current.scale.set(1, 1, 1);
      }
      if (numbersRef.current) {
        numbersRef.current.visible = false;
      }
    }
  });

  const handleModelClick = (e) => {
    let curr = e.object;
    let isKeyboardClicked = false;
    let isMonitorClicked = false;
    
    while (curr) {
      if (curr.name.includes("PC_keyboard")) {
        isKeyboardClicked = true;
      }
      if (curr.name.includes("PC_monitor") || curr.name.includes("PC_screen")) {
        isMonitorClicked = true;
      }
      curr = curr.parent;
    }

    if (isKeyboardClicked) {
      e.stopPropagation(); 
      jumpAnim.current = 1.0; 
    }

    if (isMonitorClicked) {
      e.stopPropagation();
      setIsScreenOn((prev) => !prev);
    }
  };

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onPointerEnter={() => document.body.style.cursor = 'pointer'}
      onPointerLeave={() => document.body.style.cursor = 'default'}
    >
      <primitive object={scene} onClick={handleModelClick} />
    </group>
  );
}

export const ModelViewer = ({ modelPath }) => {
  const [isScreenOn, setIsScreenOn] = useState(false);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <SceneLighting isScreenOn={isScreenOn} />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Model url={modelPath} isScreenOn={isScreenOn} setIsScreenOn={setIsScreenOn} />
      </Suspense>
      
      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  );
};
