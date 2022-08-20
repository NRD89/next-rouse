import Head from "next/head";
import HeaderNew from "../../components/HeaderNew";
import HeroBlog from "../../components/HeroBlog";
import BlogList from "../../components/BlogList";
import FooterNew from "../../components/FooterNew";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";

const postsQuery = groq`
  *[_type == 'post']{
    title,
    description,
    instructor->{
      image,
      name,
      "slug": slug.current
    },
    mainImage,
    publishedAt,
    "slug": slug.current
  } | order(publishedAt desc) [0..3]
`

const featuredPostQuery = groq`
  *[_type == 'featuredPost']{
    post-> {
      title,
      description,
      instructor-> {
        image,
  		  name,
  		  "slug": slug.current
      },
      mainImage,
      publishedAt,
      "slug": slug.current
    }
  } 
`;

const Blog = ({ posts, featured }) => {
  console.log("posts =>", posts);
  console.log("featured =>", featured[0]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>
          Yoga articles based on science and spirituality | Rouse Yoga
        </title>
        <meta
          name="description"
          content="Our innovative yoga platform offers online yoga livestreams, pre-recorded yoga classes, and Discord technologies to create a truly interactive community. Easy to use and navigate, your membership helps you not just learn how to practice yoga, but how to find purpose in that practice."
        />
      </Head>
      <HeaderNew />
      <main>
        {/*  Page sections */}
        <HeroBlog data={featured[0].post} />
        {/* <FeaturedPosts /> */}
        <BlogList posts={posts} featured={featured[0].post} />
      </main>
      <FooterNew />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getClient().fetch(postsQuery);
  const featured = await getClient().fetch(featuredPostQuery);

  return {
    props: { posts, featured },
  };
}
