import Home from "../components/Pages/Home/Home";
import { SectionProvider } from "../context/SectionContext";
import "../style/global.css";

export default function App() {
  return (
    <SectionProvider>
      <Home />
    </SectionProvider>
  )
}