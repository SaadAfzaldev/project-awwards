import About from "./components/about"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden ">
      <Navbar/>
      <Hero/>
      <About/>
    
    </main>
  )
}
