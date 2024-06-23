import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="items-center">
        <Navbar />
      </div>
      <div>
        <AboutMe />
      </div>
    </main>
  );
}
