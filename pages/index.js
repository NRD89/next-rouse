import Head from "next/head"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import FeaturesZigzag from "../components/FeaturesZigzag"
import PricingTables from "../components/PricingTables"
import DiscordWidget from "../components/DiscordWidget"
import CtaFreeTrial from "../components/CtaFreeTrial"
import FooterNew from "../components/FooterNew"
import Stats from "../components/Stats"
// import DigitalModal from "../components/DigitalModal"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Online Yoga Classes & Live Streams | Rouse Yoga</title>
        <meta
          name="description"
          content="Our innovative yoga platform offers online yoga livestreams, pre-recorded yoga classes, and Discord technologies to create a truly interactive community. Easy to use and navigate, your membership helps you not just learn how to practice yoga, but how to find purpose in that practice."
        />
      </Head>
      <Header />
      <main>
        <HeroHome />
        {/* <Stats /> */}
        <FeaturesZigzag />
        <PricingTables />
        {/* <OffsetCards />
      <ImageTextCards />
      <PricingCards /> */}
        {/* <DiscordWidget /> */}
        <CtaFreeTrial />
      </main>
      <FooterNew />
    </div>
  )
}

export default Index
