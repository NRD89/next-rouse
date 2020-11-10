import Header from "../components/Header"
import Hero from "../components/Hero"


const Index = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <Hero />
    <div className="grid items-center justify-center h-scroll">
      <button
        className="
          bg-indigo-600
          hover:bg-indigo-500
          focus[outline-none border-indigo-700 shadow-outline-indigo]
          active:bg-indigo-700
          transition duration-150 ease-in-out
        "
      >
        Emotion + Tailwind
      </button>
    </div>
  </div>
)

export default Index
