import React, { useRef } from 'react'
import './App.scss'
import { Canvas, useFrame } from 'react-three-fiber'

const Box = () => {
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' /> 
    </mesh>
  )
}

function App() {

  return (
    <>
      <Canvas>
        {/* It will Take only Three JS elements */}
        <Box />
      </Canvas>
    </>
  );
}

export default App;
