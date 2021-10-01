import { useSWRInfinite } from "swr";
import { getClient } from "../../lib/sanity.server";

const fetcher = (query) => request("http://localhost:1337/graphql", query);

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `{
    posts(
      limit: 4 
      start: 4
      sort: "creation_date:desc"
      where: { Slug_ne: "first-article" }
    ) {
      Slug
      title
      description
      hero_image
      creation_date
      instructor {
        Title
        Slug
        avatar {
          formats
        }
      }
    }
  }`;
};