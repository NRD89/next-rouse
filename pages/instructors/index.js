import Layout from "../../components/Layout"
import { fetchQuery, baseUrl } from "../../utils"
import Link from "next/link"
import { Card, CardBody, Button } from "@windmill/react-ui"
import Head from "next/head"

const index = ({ instructors }) => {
  return (
    <Layout>
      <div className="flex w-full justify-center">
        <h1 className="h1 text-blue-500">Instructors</h1>
      </div>
      <section className="grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
        {instructors.map((instructor) => (
          <Card
            key={instructor.id}
            className="flex flex-col max-h-100 shadow-dark40"
          >
            <img
              className="shadow-lg object-cover h-1/2 w-full"
              alt="Mountains"
              src={
                instructor.Image.formats !== null
                  ? `${process.env.NEXT_PUBLIC_API_URL}${instructor.Image.formats.small.url}`
                  : `${process.env.NEXT_PUBLIC_API_URL}${instructor.Image.url}`
              }
              loading="lazy"
            />
            <CardBody>
              <h3 className="mb-4 font-semibold h4 text-tertiary-darkest">
                {instructor.Title}
              </h3>
              <p className="mb-4 text-tertiary-darker">
                {instructor.indexIntro}
              </p>
              <style jsx>{`
                p {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                }
              `}</style>
              <div>
                <Button size="small" className="bg-tertiary-darkest">
                  <Link href={`/instructors/${instructor.Slug}`}>
                    <a className="text-sm text-gray-200 ">Read more</a>
                  </Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </section>
    </Layout>
  )
}

export default index

export async function getStaticProps() {
  // const { API_URL } = process.env
  // const response = await fetch(`http://localhost:1337/instructors`, {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // }).catch((err) => console.error(JSON.stringify(err, null, 2)))
  // const data = await response.json()
  // console.log("instructors index =>", JSON.stringify(data))
  const instructors = await fetchQuery("instructors")
  return {
    props: {
      instructors,
    },
  }
}
