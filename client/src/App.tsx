import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--font-clr-brn)] max-w-1280 m-0-auto p-8 text-center">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
