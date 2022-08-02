import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import axios from "axios";

const InwardHero = ({
  title,
  btn,
  btnLink,
  btnText,
  imgURL,
  priceType,
  price,
  sale,
  discountPrice,
  subHeading,
}) => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-96 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40"
          src={imgURL}
          alt=""
          layout="fill"
          quality={70}
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
                  <h1 className="h1 font-red-hat-display mb-4">{title}</h1>

                  {price ? (
                    <h3 className="text-xl text-gray-800 dark:text-gray-100 font-medium">
                      {priceType} Price:{" "}
                      {sale ? (
                        <>
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            ${discountPrice}
                          </span>
                          <span className="text-gray-900 dark:text-gray-50 font-bold line-through ml-1">
                            ${price}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-900 dark:text-gray-50 font-bold">
                          ${price}
                        </span>
                      )}
                    </h3>
                  ) : (
                    <p className="text-xl text-gray-700 dark:text-gray-100 font-medium max-w-[40ch] mx-auto">
                      {subHeading}
                    </p>
                  )}
                </div>
                {/* Article meta */}
                <div className="mt-5 ">
                  {/* Author meta */}
                  <div className="flex items-center justify-center sm:-mr-2">
                    <Button
                      btnText={btnText ? btnText : `Purchase Now!`}
                      btnPriority="cta"
                      // btnLink={process.env.NEXT_PUBLIC_INWARD_PAYMENT_LINK}
                      btnLink={btnLink}
                      btn={btn}
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
