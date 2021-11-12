import { useNextSanityImage } from "next-sanity-image";
import { nextSanityImageClient } from "../lib/sanity.server";

export const splitDate = (publishedAt) => publishedAt.split("T");

export const imageProps = (mainImage) =>
  useNextSanityImage(nextSanityImageClient, mainImage, {
    blurUpImageWidth: 124,
    blurUpImageQuality: 40,
    blurUpAmount: 24,
  });
