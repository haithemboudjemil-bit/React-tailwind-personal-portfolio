import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />

        {/* 
        <Testimonials />
         */}
      </main>
    </div>
  );
}

export default App;
