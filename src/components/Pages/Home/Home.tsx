import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Keyboard from "../../UI/Keyboard";
import Navbar from "../../UI/Navbar";
import HeroSection from "../../Layout/HeroSection";
import TechStack from "../../Layout/TechStack";
import ProjectSection from "../../Layout/ProjectSection";
import ContactSection from "../../Layout/ContactSection";
import PopupModal from "../../UI/PopupModal";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <main>
        <div className={styles.container}>
            <div className={styles.stars} />
            <div className={styles.stars2} />
            <div className={styles.stars3} />
            <Navbar />
            <PopupModal />

            <div className={styles.canvasContainer}>
                <Canvas
                    camera={{
                        position: [0, 6, 12],
                        fov: 45,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <ambientLight intensity={0.4} />
                    <directionalLight
                        position={[8, 10, 5]}
                        intensity={1.8}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <pointLight position={[-5, 5, -5]} intensity={0.6} color="#f0f0f0" />
                    <Environment preset="city" />
                    <Keyboard />
                    <ContactShadows
                        resolution={1024}
                        scale={20}
                        blur={2.5}
                        opacity={0.4}
                        far={10}
                        color="#000000"
                    />
                </Canvas>
            </div>

            <div className={styles.sections}>
                <HeroSection />
                <TechStack />
                <ProjectSection />
                <ContactSection />
            </div>
        </div>
        </main>
    );
};

export default Home;