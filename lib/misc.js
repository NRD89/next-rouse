import { useNextSanityImage } from "next-sanity-image";
import { nextSanityImageClient } from "../lib/sanity.server";

export const splitDate = (publishedAt) => publishedAt.split("T");

export const imageProps = (mainImage) =>
  useNextSanityImage(nextSanityImageClient, mainImage, {
    blurUpImageWidth: 124,
    blurUpImageQuality: 40,
    blurUpAmount: 24,
  });

export const formatPrice = (amount = 0) => {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  // check if its a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
};
