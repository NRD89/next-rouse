import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor, PortableText } from "../../lib/sanity";
import { sanityClient, getClient } from "../../lib/sanity.server";

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    "slug": slug.current
  }
`;

const Post = ({ data, preview }) => {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, mainImage, body } = post;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-5xl tracking-tight font-bold mb-4">{title}</h2>
        <figure>
          <img src={urlFor(mainImage).url()} />
        </figure>
        <PortableText className="prose-xl max-w-prose mx-auto" blocks={body} />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  console.log("post =>", post);
  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default Post;
