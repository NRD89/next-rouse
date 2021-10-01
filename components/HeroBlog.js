import Link from "next/link";
import Image from "next/image";
import { urlFor } from '../lib/sanity'
import { splitDate, imageProps } from "../lib/misc";

const HeroBlog = ({ data }) => {
  const { description, instructor, mainImage, publishedAt, slug, title } = data;

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40"
          src={imageProps(mainImage).src}
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
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <header>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <Link href={`/blog/${slug}`}>
                    <a>
                      <h1 className="h1 font-red-hat-display mb-4">
                        {title}
                      </h1>
                    </a>
                  </Link>
                  <p className="text-xl">{description}</p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">
                  {/* Author meta */}
                  <div className="flex items-center justify-center">
                    <a className="mr-3" href="#0">
                      <img
                        className="rounded-full flex-shrink-0"
                        src={urlFor(instructor.image).url()}
                        width="32"
                        height="32"
                        alt="Author 04"
                      />
                    </a>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        By{" "}
                      </span>
                      <a
                        className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                        href="#0"
                      >
                        {instructor.name}
                      </a>
                      <span className="text-gray-600 dark:text-gray-400">
                        {" "}
                        · {splitDate(publishedAt)[0]}
                      </span>
                    </div>
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

export default HeroBlog;
