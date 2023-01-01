import Link from "next/link";
import useSWR from "swr"
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import {PortableText} from '@portabletext/react'

const HeaderBanner = () => {
  const { data, error, mutate } = useSWR(groq`*[_type == "header_banner"][0]`, query =>
  getClient().fetch(query))
  console.log("🚀 ~ file: HeaderBanner.js:10 ~ HeaderBanner ~ data", data)

  const myPortableTextComponents = {
    block: {
      h4: ({children}) => <p className="text-white">{children}</p>
    },
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-l from-purple-700 via-pink-800 to-purple-700 py-1 text-sm font-medium uppercase text-gray-50`}
    >
      {/* <a href="https://app.rouse.yoga">Sign up and get your first class <strong className="text-white tracking-wide">FREE</strong>!</a> */}
        <a
          href={data?.link}
          className="underline text-gray-50"
          style={{
            textDecorationColor: "#60a5fa",
            textDecorationThickness: "2px",
            textUnderlineOffset: "2px",
          }}
        >
         {data ? <PortableText value={data?.banner_content} components={myPortableTextComponents} /> : "Loading..." }
        </a>
    </div>
  );
};

export default HeaderBanner;
