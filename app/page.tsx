import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-base-100">
      <Sidebar />
      <div className="w-full flex-row">
        <Hero />
      </div>
    </main>
  );
}
