import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { splitDate, imageProps } from "../lib/misc";
import Button from "./Button";

const InwardHero = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-96 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40"
          src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1645996300/026e4685f8a05b3cc44d7ce1f2b5bfa1bdeb8fc6-2846x1897_pyg1lv.jpg"
          alt="About"
          layout="fill"
          priority
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
                  <h1 className="h1 font-red-hat-display mb-4">Inward Fest</h1>
                  <h3 className="text-xl text-gray-100 font-medium">
                    Ticket Price:{" "}
                    <span
                      className="text-white font-bold"
                    >
                      $100
                    </span>
                  </h3>
                </div>
                {/* Article meta */}
                <div className="mt-5 ">
                  {/* Author meta */}
                  <div className="flex items-center justify-center sm:-mr-2">
                    <Button
                      btnText="Purchase Now!"
                      btnPriority="cta"
                      btnLink={process.env.NEXT_PUBLIC_INWARD_PAYMENT_LINK}
                    />
                  </div>
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InwardHero;
