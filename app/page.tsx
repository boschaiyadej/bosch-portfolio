import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contacts/Contact";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-base-100">
      <Sidebar />
      <div className="w-full flex-row">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
