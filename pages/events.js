import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import FooterNew from "../components/FooterNew";
import EventList from "../components/EventList"
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";

const todaysDate = new Date().toISOString();

const eventsQuery = groq`
  *[_type == 'event' && eventDateTime >= $todaysDate]{
    _id,
    title,
    description,
    guest_host,
    instructor->{
      image,
      name,
      "slug": slug.current
    },
    event_image,
    stripe_price,
    eventDateTime,
    style,
    regular_price,
    membership_price,
    coupon_codes,
    max_capacity,
  } | order(eventDateTime asc)
`;

const params = { todaysDate: todaysDate };

const Events = ({ events }) => {
  console.log("events =>", events);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Yoga events | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga studio offers free and paid events to the Riverside community. These events range from free childrens yoga to incredible sound baths hosted by professional sound healers."
        />
      </Head>
      <Header />
      <main>
        {/*  Page sections */}
        <section className="relative">
          {/* Background image */}
          <div className="absolute inset-0 h-72 pt-16 box-content -z-1">
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-[0.35] dark:opacity-40"
              src="/rouse_mural_comp.jpg"
              alt="About"
              layout="fill"
              priority
              quality="35"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white dark:from-black"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-16">
              {/* Featured article */}
              <div className="max-w-3xl mx-auto" data-aos="fade-down">
                <article>
                  <header>
                    {/* Title and excerpt */}
                    <div className="text-center">
                      <h1 className="text-7xl font-bold uppercase tracking-wide font-red-hat-display mb-4">Events</h1>
                    </div>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>
        <EventList events={events}/>
        {/* <BlogList posts={posts} featured={featured[0].post} /> */}
      </main>
      <FooterNew />
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const events = await getClient().fetch(eventsQuery, params);

  return {
    props: { events },
  };
}
