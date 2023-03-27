//import * as THREE from 'three'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  PerspectiveCamera,
  Environment,
  OrbitControls,
  TorusKnot,
  Cloud
} from '@react-three/drei'

import './styles.css'

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={['white']} />

      <React.Suspense fallback={null}>
        <Cloud
          position={[5, 20, 0]}
          args={[13, 4]}
          segments={50}
          color="#00ff69"
        />
        <Cloud position={[4, 12, 0]} args={[23, 24]} segments={50} />
      </React.Suspense>

      <ambientLight intensity={1.0} />
      <pointLight position={[5, 5, 2]} color="#00ff69" showHelper="false" />
      <hemisphereLight args={[0xffffbb, 0x080820, 1]} />

      <Environment ground={[15, 10]} preset="warehouse" />

      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial metalness={1} roughness={0} />
      </mesh>

      <TorusKnot scale={5} args={[1.5, 0.42, 128, 12]} position={[12, 12, 12]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.3}
          color="#00ff69"
          emissive={1}
        />
      </TorusKnot>

      <ContactShadows
        resolution={1024}
        position={[1, 0, 1]}
        scale={100}
        blur={3}
        opacity={1}
        rotation={[Math.PI / 3, 0, 0]}
        far={3}
      />

      <OrbitControls autoRotate />
      <PerspectiveCamera
        position={[30, 30, 30]}
        makeDefault
        showHelper="true"
      />
    </Canvas>
  )
}