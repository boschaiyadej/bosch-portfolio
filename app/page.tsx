import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-base-100">
      <Sidebar />
      <div className="w-full flex-row">
        <Hero />
        <About />
      </div>
    </main>
  );
}
