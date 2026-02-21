import { useRef, useState, useEffect, useCallback } from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useFrame, type ThreeElements } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { useSectionContext } from '../../../context/useSectionContext'
import type { Mesh, MeshStandardMaterial, Group, BufferGeometry } from 'three'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Base: Mesh
    Key_05: Mesh
    Key_01: Mesh
    Key_02: Mesh
    Key_03: Mesh
    Key_04: Mesh
    Key_06: Mesh
  }
  materials: {
    ['Material.009']: MeshStandardMaterial
    ['Material.007']: MeshStandardMaterial
    ['Material.006']: MeshStandardMaterial
    ['Material.008']: MeshStandardMaterial
    ['Material.003']: MeshStandardMaterial
    ['Material.001']: MeshStandardMaterial
    ['Material.004']: MeshStandardMaterial
  }
}

interface AnimatedKeyProps {
  geometry: BufferGeometry
  material: MeshStandardMaterial
  position: [number, number, number]
  delay: number
}

const AnimatedKey = ({ geometry, material, position, delay }: AnimatedKeyProps) => {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const { posY, scale } = useSpring({
    posY: visible ? (clicked ? position[1] - 0.3 : hovered ? position[1] + 0.15 : position[1]) : position[1] + 3,
    scale: visible ? 1 : 0,
    config: { mass: 1, tension: 180, friction: 12 },
  })

  const handlePointerDown = useCallback(() => setClicked(true), [])
  const handlePointerUp = useCallback(() => setClicked(false), [])

  return (
    <animated.group
      position-x={position[0]}
      position-y={posY}
      position-z={position[2]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => { setHovered(false); setClicked(false) }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <mesh geometry={geometry} material={material} />
    </animated.group>
  )
}

export function Model(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/keyboard.glb') as unknown as GLTFResult
  const groupRef = useRef<Group>(null)
  const { activeSection } = useSectionContext()
  const rotationRef = useRef(0)


  const isTechStack = activeSection === 'Tech Stack'
  const isHome = activeSection === 'Home'
  const isContact = activeSection === 'Contact'

  const [spinCount, setSpinCount] = useState(0)
  const [prevSection, setPrevSection] = useState(activeSection)

  if (activeSection !== prevSection) {
    setPrevSection(activeSection)
    if (activeSection === 'Tech Stack') {
      setSpinCount((c) => c + 1)
    }
  }

  const BASE_ROT_Y = 0
  const currentBaseRotY = spinCount * Math.PI * 2 + BASE_ROT_Y

  const { rotX, rotY, posX, posY, posZ, groupScale } = useSpring({
    rotX: isTechStack ? 0.6 : 0.4,
    rotY: isTechStack
      ? currentBaseRotY
      : isHome
        ? currentBaseRotY + Math.PI / 6
        : isContact
          ? currentBaseRotY - Math.PI / 8
          : currentBaseRotY + Math.PI / 6,
    posX: isTechStack ? 0 : 5,
    posY: isHome ? 1 : 1,
    posZ: isTechStack ? 0 : -2,
    groupScale: isTechStack ? 3.5 : 2.4,
    config: isTechStack
      ? { mass: 2, tension: 60, friction: 18 }
      : { mass: 1.5, tension: 80, friction: 20 },
  })

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08
      rotationRef.current = state.clock.elapsedTime
    }
  })

  return (
    <animated.group
      {...props}
      dispose={null}
      rotation-x={rotX}
      rotation-y={rotY}
      position-x={posX}
      position-y={posY}
      position-z={posZ}
      scale={groupScale}
    >
      <Center>
        <group ref={groupRef} rotation={[0, Math.PI, 0]}>
          <mesh
            geometry={nodes.Base.geometry}
            material={materials['Material.009']}
            position={[-1.211, 0, -0.446]}
          />

          <AnimatedKey delay={0.5} geometry={nodes.Key_05.geometry} material={materials['Material.007']} position={[-2.445, 0.477, -0.972]} />
          <AnimatedKey delay={0.65} geometry={nodes.Key_01.geometry} material={materials['Material.006']} position={[-1.224, 0.477, -0.972]} />
          <AnimatedKey delay={0.8} geometry={nodes.Key_02.geometry} material={materials['Material.008']} position={[0.011, 0.477, -0.972]} />
          <AnimatedKey delay={0.95} geometry={nodes.Key_03.geometry} material={materials['Material.003']} position={[-2.445, 0.477, 0.104]} />
          <AnimatedKey delay={1.1} geometry={nodes.Key_04.geometry} material={materials['Material.001']} position={[-1.224, 0.477, 0.104]} />
          <AnimatedKey delay={1.25} geometry={nodes.Key_06.geometry} material={materials['Material.004']} position={[0.011, 0.477, 0.104]} />
        </group>
      </Center>
    </animated.group>
  )
}

useGLTF.preload('/keyboard.glb')
