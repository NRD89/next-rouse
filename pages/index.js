import Header from "../components/Header"
import Hero from "../components/Hero"
import PricingCards from "../components/PricingCards"
import OffsetCards from "../components/OffsetCards"
import ImageTextCards from "../components/ImageTextCards"
import Footer from "../components/Footer"
// import DigitalModal from "../components/DigitalModal"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <OffsetCards />
      <ImageTextCards />
      <PricingCards />
      {/* <DigitalModal /> */}
      <Footer />
    </div>
  )
}

export default Index
