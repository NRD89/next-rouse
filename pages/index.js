import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import FeaturesZigzag from "../components/FeaturesZigzag"
import PricingTables from "../components/PricingTables"
import DiscordWidget from "../components/DiscordWidget"
import CtaFreeTrial from "../components/CtaFreeTrial"
import FooterNew from "../components/FooterNew"
// import DigitalModal from "../components/DigitalModal"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <HeroHome />
      <FeaturesZigzag />
      <PricingTables />
      {/* <OffsetCards />
      <ImageTextCards />
      <PricingCards /> */}
      <DiscordWidget />
      <CtaFreeTrial />
      <FooterNew />
    </div>
  )
}

export default Index
