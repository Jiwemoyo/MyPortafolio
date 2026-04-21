import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const screenShader = {
  uniforms: {
    time: { value: 0 }
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

    float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void main() {
      vec2 seed = vUv + fract(time);
      float noise = rand(seed);
      float scanline = sin(vUv.y * 800.0 - time * 50.0) * 0.1;
      vec3 color = vec3(noise * 0.4, noise * 0.8, noise * 0.9);
      gl_FragColor = vec4(color - scanline, 1.0);
    }
  `
};

function Model({ url }) {
  const { scene } = useGLTF(url);
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  
  // Refs para la interactividad del PC
  const materialRef = useRef(new THREE.ShaderMaterial(screenShader));
  const monitorRef = useRef(null);
  const jumpAnim = useRef(0); // Va de 1.0 a 0.0 durante el salto

  useEffect(() => {
    scene.traverse((child) => {
      // A veces Blender exporta el nodo padre con el nombre, y los hijos como mallas sin ese nombre.
      if (child.name.includes("PC_screen")) {
        if (child.isMesh) {
          child.material = materialRef.current;
        } else {
          // Si es un grupo, buscamos en sus hijos
          child.children.forEach(c => {
             if (c.isMesh) c.material = materialRef.current;
          });
        }
      }
      
      // Capturamos el monitor entero (sea nodo grupo o malla directa) para el salto
      if (child.name.includes("PC_monitor") && !monitorRef.current) {
        monitorRef.current = child;
        // Guardamos la altura original
        if (child.userData.originalY === undefined) {
          child.userData.originalY = child.position.y;
        }
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    // 1. Efecto shader
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }

    // 2. Efecto hover giro a 3/4
    if (groupRef.current) {
      if (hovered) {
        groupRef.current.rotation.y = groupRef.current.rotation.y % (Math.PI * 2);
        const targetRotation = -Math.PI / 4; 
        let diff = targetRotation - groupRef.current.rotation.y;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        groupRef.current.rotation.y += diff * 0.1;
      } else {
        groupRef.current.rotation.y += delta * 0.5;
      }
    }

    // 3. Efecto animado del salto del monitor
    if (jumpAnim.current > 0) {
      jumpAnim.current -= delta * 3.5; 
      if (jumpAnim.current < 0) jumpAnim.current = 0;

      const arc = Math.sin(jumpAnim.current * Math.PI); 
      const jumpHeight = arc * 0.7; 

      if (monitorRef.current) {
        monitorRef.current.position.y = monitorRef.current.userData.originalY + jumpHeight;
        
        const stretch = 1.0 + (arc * 0.3);
        const squash = 1.0 - (arc * 0.15);
        monitorRef.current.scale.set(squash, stretch, squash);
      }
    } else if (monitorRef.current) {
      monitorRef.current.position.y = monitorRef.current.userData.originalY;
      monitorRef.current.scale.set(1, 1, 1);
    }
  });

  const handleModelClick = (e) => {
    let curr = e.object;
    let isKeyboardClicked = false;
    
    // Subimos por el árbol de piezas para verificar si cliqueamos parte del teclado
    while (curr) {
      if (curr.name.includes("PC_keyboard")) {
        isKeyboardClicked = true;
        break;
      }
      curr = curr.parent;
    }

    // Si efectivamente clickeamos algo que pertenece a PC_keyboard
    if (isKeyboardClicked) {
      e.stopPropagation(); 
      jumpAnim.current = 1.0; 
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
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Model url={modelPath} />
      </Suspense>
      
      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  );
};
