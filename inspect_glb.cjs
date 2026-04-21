const fs = require('fs');

try {
  const buffer = fs.readFileSync('public/3D_models/Alesssandro_3D.glb');
  const chunkLength = buffer.readUInt32LE(12);
  const jsonBuffer = buffer.slice(20, 20 + chunkLength);
  const jsonData = JSON.parse(jsonBuffer.toString('utf8'));
  
  const meshes = jsonData.meshes ? jsonData.meshes.map(m => m.name) : [];
  const nodes = jsonData.nodes ? jsonData.nodes.map(n => n.name) : [];
  
  console.log("== MESHES ==");
  console.log(meshes);
  console.log("== NODES ==");
  console.log(nodes);
} catch (e) {
  console.error(e);
}
