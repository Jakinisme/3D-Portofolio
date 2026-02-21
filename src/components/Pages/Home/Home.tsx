import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Keyboard from "../../UI/Keyboard";

const Home = () => {
    return (
        <Canvas camera={{
            position: [0, 5, 10],
            fov: 50,
            near: 0.1,
            far: 1000,
        }}>
            <ambientLight intensity={1} />
            <Keyboard />
            <OrbitControls />
        </Canvas>
    )
}

export default Home