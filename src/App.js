import React from 'react'
import './App.scss'
import { Canvas } from 'react-three-fiber'

function App() {
  return (
    <>
      <Canvas>
        {/* It will Take only Three JS elements */}
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material' /> 
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
