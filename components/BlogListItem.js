import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { nextSanityImageClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";
import { splitDate, imageProps } from "../lib/misc";

const BlogListItem = ({ post }) => {
  const { description, instructor, mainImage, publishedAt, slug, title } = post;
  console.log("blog list item =>", post);

  return (
    <article className="flex flex-col h-full">
      <header>
        <Link href={`/blog/${slug}`}>
          <a className="block mb-4">
            <figure className="relative h-0 pb-9/16 ">
              <Image
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                src={
                  mainImage.asset.path !== undefined || null
                    ? `https://cdn.sanity.io/${mainImage.asset.path}`
                    : imageProps(mainImage).src
                }
                width="540"
                height="304"
                alt="News 01"
              />
            </figure>
          </a>
        </Link>
        <Link className="hover:underline" href={`/blog/${slug}`}>
          <a className="hover:underline">
            <h3 className="h4 font-red-hat-display mb-2">{title}</h3>
          </a>
        </Link>
      </header>
      <p className="flex-grow">{description}</p>
      <footer className="flex items-center mt-4">
        <Link
          href={`/instructors/${
            instructor.slug.current !== undefined || null
              ? instructor.slug.current
              : instructor.slug
          }`}
        >
          <a className="mr-3">
            <img
              className="rounded-full flex-shrink-0"
              src={
                instructor.image.asset.path !== undefined || null
                  ? `https://cdn.sanity.io/${instructor.image.asset.path}`
                  : urlFor(instructor.image).url()
              }
              width="32"
              height="32"
              alt={`Avatar image of instructor ${instructor.name}`}
            />
          </a>
        </Link>
        <div className="text-sm text-gray-500">
          By{" "}
          <Link
            href={`/instructors/${
              instructor.slug.current !== undefined || null
                ? instructor.slug.current
                : instructor.slug
            }`}
          >
            <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline">
              {instructor.name}
            </a>
          </Link>{" "}
          · <span className="text-gray-500">{splitDate(publishedAt)[0]}</span>
        </div>
      </footer>
    </article>
  );
};

export default BlogListItem;
