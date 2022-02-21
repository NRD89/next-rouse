import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import ReactMarkdown from "react-markdown";
import EventPaymentModal from "./EventPaymentModal";
import useSWR from "swr";
import { groq } from "next-sanity";
import Image from "next/image";
import { getClient } from "../lib/sanity.server";
import { splitDate, imageProps } from "../lib/misc";
import { format } from "date-fns";

const attendeeQuery = groq`
  count(*[_type == 'attendee' && references(*[_type=="event" && _id == $id]._id)])
`;

function EventListItem({ event }) {
  console.log("event =>", event);
  const params = { id: event._id };
  async function fetcher(query, serializedParams) {
    const params = JSON.parse(serializedParams);
    await getClient().fetch(query, params);
  }

  const { data, error } = useSWR(
    groq`
      count(*[_type == 'attendee' && references(*[_type=="event" && _id == "${event._id}"]._id)])
    `,
    (query) => getClient().fetch(query)
  );
  const [attendees, setAttendees] = useState();
  console.log("data =>", data);

  const adjustedCount = data + 8;
  const adjustedCapacity = event.max_capacity + 8;

  useEffect(() => {
    const player = new Plyr("#player");

    // async function fetchattendees() {
    //   const getAttendees = await getClient().fetch(attendeeQuery, params);
    //   console.log("use effect =>", getAttendees);
    //   setAttendees(getAttendees);
    // }

    // fetchattendees();
  }, []);
  return (
    <div data-aos="fade-down" data-aos-delay="200">
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full ">
                  <div
                    className="
                                    absolute
                                    top-0
                                    rounded-full
                                    bg-blue-400
                                    dark:bg-blue-700
                                    -left-4
                                    w-72
                                    h-72
                                    mix-blend-multiply
                                    dark:mix-blend-difference
                                    filter
                                    blur-xl
                                    opacity-70
                                    dark:opacity-50
                                    animate-blob
                                  "
                  ></div>
                  <div
                    className=" 
                                    absolute
                                    rounded-full
                                    bg-pink-300
                                    dark:bg-pink-800
                                    -bottom-10
                                    right-20
                                    w-72
                                    h-72
                                    mix-blend-multiply
                                    dark:mix-blend-difference
                                    filter
                                    blur-xl
                                    opacity-70
                                    dark:opacity-40
                                    animate-blob
                                    animation-delay-4000
                                  "
                  ></div>
                  <div className="relative w-full h-full text-center">
                    {/* <div className="w-full flex items-center justify-center my-10">
                      <div className="relative w-full">
                        <div className="plyr__video-embed" id="player">
                          <LazyLoad
                            className="plyr__video-embed"
                            id="player"
                            height={256}
                          >
                            <iframe
                              src="https://player.vimeo.com/video/648925365"
                              allowFullScreen
                              allowtransparency="true"
                              allow="autoplay"
                              className="w-full h-full rounded-xl"
                            ></iframe>
                          </LazyLoad>
                        </div>
                      </div>
                    </div> */}
                    <Image
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      // loader={sanityIoImageLoader}
                      src={
                        event.event_image.asset.path !== undefined || null
                          ? `https://cdn.sanity.io/${event.event_image.asset.path}`
                          : imageProps(event.event_image).src
                      }
                      // layout="fill"
                      width="450"
                      height="450"
                      alt={event.title}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
                flex flex-col
                items-start
                mt-12
                mb-16
                text-left
                lg:flex-grow lg:w-1/2 lg:pl-6
                xl:pl-24
                md:mb-0
                xl:mt-0
              "
            >
              <span className="mb-8 text-sm font-bold tracking-widest text-blue-400 uppercase">
              {event.guest_host ? event.guest_host : event.instructor.name} presents
              </span>
              <h1
                className="
                    mb-4
                    text-4xl
                    font-bold
                    leading-none
                    tracking-tighter
                    text-neutral-600
                    md:text-7xl
                    lg:text-5xl
                "
              >
                {event.title}
              </h1>
              <p className="text-xl font-semibold  mb-4">
                {`${format(
                  new Date(event.eventDateTime),
                  "EEEE, MMMM dd 'at' h:mm aaaa"
                )}`}{" "}
              </p>
              <div
                className="prose prose-xl prose-purple mb-8"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <ReactMarkdown
                  source={event.description}
                  escapeHtml={false}
                  // renderers={renderers}
                  // transformImageUri={(uri) =>
                  //   uri.startsWith("http")
                  //     ? uri
                  //     : `http://localhost:1337${uri}`
                  // }
                />
              </div>
              <p className="font-medium text-lg">
                <span className="font-bold text-gray-900 dark:text-gray-50">
                  {`${event.max_capacity - data}`}/
                  {`${event.max_capacity}`}
                </span>{" "}
                Spots Available
              </p>
              {data >= event.max_capacity ? (
                <p className="text-xl uppercase font-bold mt-4 text-gray-900 dark:text-gray-100 tracking-wide">
                  Event Full
                </p>
              ) : (
                <EventPaymentModal
                  regular_price={event.regular_price}
                  membership_price={event.membership_price}
                  coupon_codes={event.coupon_codes}
                  id={event._id}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventListItem;
