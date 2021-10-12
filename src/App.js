import React, { useRef } from 'react'
import './App.scss'
import { Canvas, useFrame } from 'react-three-fiber'

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} /> 
    </mesh>
  )
}

function App() {

  return (
    <>
      <Canvas camera={{position: [-5, 2, 10], fov: 60}}>
        {/* It will Take only Three JS elements */}
        <directionalLight 
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />
        <ambientLight intensity='0.3' />
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightBlue' />
        <SpinningMesh position={[-2, 1, -5]} color='pink' />
        <SpinningMesh position={[5, 1, -2]} color='pink' />
      </Canvas>
    </>
  );
}

export default App;
