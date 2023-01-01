import Head from "next/head";
import HeaderNew from "../components/HeaderNew";
import HeroHome from "../components/HeroHome";
import HomeFeaturesSection from "../components/HomeFeaturesSection"
import HomeZigzag from "../components/HomeZigzag";
import PricingTables from "../components/PricingTables";
import DiscordWidget from "../components/DiscordWidget";
import HomeFAQ from "../components/HomeFAQ"
import CtaFreeTrial from "../components/CtaFreeTrial";
import FooterNew from "../components/FooterNew";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";

const Index = ({ prices }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Riverside Yoga Studio | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga offers yoga classes to Riverside, California. Our classes are designed to bring variety and convenience to your yoga practice. Choose from Vinyasa, Ashtanga, Yin, Hot Yoga and our unique combo classes to find the class that best suites you!"
        />
      </Head>
      <HeaderNew />
      <main>
        <HeroHome />
        <HomeFeaturesSection />
        <HomeZigzag />
        <PricingTables prices={prices} />
        <HomeFAQ />
        <CtaFreeTrial />
      </main>
      <FooterNew />
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const pricesQuery = groq`
    *[_type == 'membership_price'] {
      _id,
      title,
      description,
      features,
      stripe_price_id,
      stripe_coupon,
      regular_price,
      discounted_price
    } | order(regular_price asc)
  `;

  const prices = await getClient().fetch(pricesQuery);

  return {
    props: { prices },
  };
}