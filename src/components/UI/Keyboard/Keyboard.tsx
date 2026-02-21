import { useGLTF } from "@react-three/drei"
import { Center } from "@react-three/drei"

const Keyboard = () => {
   const { scene } = useGLTF("/keyboard.glb")

  return (
    <Center>
      <primitive
        object={scene}
        scale={5}
      />
    </Center>
  )
}

export default Keyboard