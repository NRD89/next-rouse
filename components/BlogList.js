import BlogListItem from "./BlogListItem";
import { useSWRInfinite } from "swr";
import { request } from "graphql-request";

const fetcher = (query) =>
  request(
    "https://8aoopmst.api.sanity.io/v1/graphql/rouse-staging/default",
    query
  );

const PAGE_SIZE = 4;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.data) return null;

  // if (pageIndex === 0)
  //   return `{
  //     allPost(
  //       limit: 4
  //       offset: 0
  //       sort: { publishedAt: DESC }
  //     ) {
  //       title
  //       slug {
  //         current
  //       }
  //       description
  //       publishedAt
  //     }
  //   }`;

  return `{
    allPost(
      limit: ${PAGE_SIZE}
      offset: ${pageIndex + PAGE_SIZE}
      sort: { publishedAt: DESC }
    ) {
      title
      slug {
        current
      }
      description
      publishedAt
      mainImage {
        asset {
          path
          _type
        }
      }
      instructor {
        slug {
          current
        }
        name
        image {
          asset {
            path
            _type
          }
        }
      }
    }
  }`;
};

const BlogList = ({ posts, featured }) => {
  function checkFeatured(post) {
    return post.slug !== featured.slug;
  }

  const filteredPosts = posts.filter(checkFeatured);
  console.log("filtered posts =>", filteredPosts);

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialSize: 0,
    revalidateAll: true,
  });

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[0]?.allPost[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.allPost.length < PAGE_SIZE);

  console.log(
    "swr infinite =>",
    data?.[0]?.allPost?.[size - 1],
    "swr infinite error =>",
    error,
    "size =>",
    size,
    "isLoadingMore =>",
    isLoadingMore
  );

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div
              className="lg:flex-grow"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {/* Section title */}
              <h4 className="h3 font-red-hat-display mb-8">Latest</h4>

              {/* Articles container */}
              <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                {/* 1st article */}
                {filteredPosts.map((post) => (
                  <BlogListItem post={post} key={post.slug} />
                ))}

                {data?.[0]
                  ? data[0].allPost.map((post, index) => (
                      <div data-aos="fade-down" data-aos-delay="200">
                        <BlogListItem post={post} key={post.slug} />
                      </div>
                    ))
                  : null}
              </div>

              {/* Load more button */}
              <div className="flex justify-center mt-12 md:mt-16">
                <button
                  disabled={isLoadingMore || isReachingEnd}
                  className="btn-sm text-gray-300 hover:text-gray-100 bg-gray-800 flex items-center disabled:opacity-50 disabled:cursor-default"
                  onClick={() => setSize(size + 1)}
                >
                  {isLoadingMore ? (
                    <svg
                      className="animate-spin flex mx-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : isReachingEnd ? (
                    <span className="inline-flex items-center">No more articles <span className="text-xl ml-2">&#128549;</span> </span>
                  ) : (
                    <>
                      <span>See previous articles</span>
                      <svg
                        className="animate-bounce w-4 h-4 flex-shrink-0 ml-3"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current text-gray-500"
                          d="M14.7 9.3l-1.4-1.4L9 12.2V0H7v12.2L2.7 7.9 1.3 9.3 8 16z"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sidebar */}
            {/* <aside
              className="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:flex-shrink-0"
              data-aos="fade-down"
              data-aos-delay="400"
            > */}
            {/* Popular posts */}
            {/* <div className="mb-8">
                <h4 className="h4 font-red-hat-display mb-5">
                  Popular on Simple
                </h4>
                <ul className="-my-3">
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">
                      01
                    </div>
                    <article>
                      <Link className="hover:underline" href="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          How to get creative using geometric patterns
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Mary Champ
                        </a>{" "}
                        · <span className="text-gray-500">Oct 22, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">
                      02
                    </div>
                    <article>
                      <Link className="hover:underline" href="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          Create your branding strategy in 4 simple steps
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Lisa Allison
                        </a>{" "}
                        · <span className="text-gray-500">Oct 17, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">
                      03
                    </div>
                    <article>
                      <Link className="hover:underline" href="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          Don’t miss Appy’s exclusive workshop with our CEO
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Lisa Allison
                        </a>{" "}
                        · <span className="text-gray-500">Oct 2, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">
                      04
                    </div>
                    <article>
                      <Link className="hover:underline" href="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          How to optimize your website to convert more leads
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Greg Gilev
                        </a>{" "}
                        · <span className="text-gray-500">Sep 24, 2020</span>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">
                      05
                    </div>
                    <article>
                      <Link className="hover:underline" href="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          What to do if your product idea is stolen
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >
                          Yuri Lapko
                        </a>{" "}
                        · <span className="text-gray-500">Sep 22, 2020</span>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </aside> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
