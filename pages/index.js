import Head from "next/head";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import HomeFeaturesSection from "../components/HomeFeaturesSection"
import HomeZigzag from "../components/HomeZigzag";
import PricingTables from "../components/PricingTables";
import DiscordWidget from "../components/DiscordWidget";
import HomeFAQ from "../components/HomeFAQ"
import CtaFreeTrial from "../components/CtaFreeTrial";
import FooterNew from "../components/FooterNew";
import Stats from "../components/Stats";
// import DigitalModal from "../components/DigitalModal"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Riverside Yoga Studio | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga offers yoga classes to Riverside, California. Our classes are designed to bring variety and convenience to your yoga practice. You choose the class that’s right for you!"
        />
      </Head>
      <Header />
      <main>
        <HeroHome />
        <HomeFeaturesSection />
        <HomeZigzag />
        <PricingTables />
        <HomeFAQ />
        <CtaFreeTrial />
        {/* <OffsetCards />
      <ImageTextCards />
      <PricingCards /> */}
        {/* <DiscordWidget /> */}
      </main>
      <FooterNew />
    </div>
  );
};

export default Index;
