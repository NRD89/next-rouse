import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  Button,
} from "@windmill/react-ui"
import ClassDescDropdown from "../components/ClassDescDropdown"
import { request, gql } from "graphql-request"
import format from "date-fns/format"
import { useRouter } from "next/router"
import Link from "next/link"

// const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
//   ssr: false,
// })

const classes = ({ classList, todaysDate }) => {
  const { classes, classesConnection } = classList
  console.log(classesConnection)

  const router = useRouter()

  const [pageTable, setPageTable] = useState(1)

  const [dataTable, setDataTable] = useState([])

  const resultsPerPage = 7
  const totalResults = classesConnection.aggregate.count

  function onPageChangeTable(p) {
    setPageTable(p)
    console.log(pageTable)
  }

  useEffect(() => {
    // setDataTable((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
    // console.log(dataTable)
    router.push(`/classes?page=${pageTable}`)
  }, [pageTable])

  return (
    <Layout>
      <div className="flex w-full justify-center">
        <h1 className="h1 text-blue-500">Class Schedule</h1>
      </div>
      <TableContainer className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Instructor</TableCell>
              <TableCell>Class/Description</TableCell>
              <TableCell>Date/Time</TableCell>
              <TableCell>Style/Level</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((_class, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link href={`/instructors/${_class.instructor.Slug}`}>
                    <a>
                      <div className="flex items-center text-sm">
                        <Avatar
                          src={`${process.env.NEXT_PUBLIC_API_URL}${_class.instructor.avatar.formats.small.url}`}
                          loading="lazy"
                          alt={`Instructor ${_class.instructor.Title}`}
                        />
                        <span className="font-semibold ml-2">
                          {_class.instructor.Title}
                        </span>
                      </div>
                    </a>
                  </Link>
                </TableCell>
                <TableCell className="max-w-logo">
                  <ClassDescDropdown
                    className="text-sm"
                    classTitle={_class.Title}
                    classDesc={_class.description}
                  />
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {`${format(
                      new Date(`${_class.date}T${_class.time}`),
                      "MM-dd-yyyy h:mm aaaa"
                    )}`}{" "}
                    PST
                  </span>
                </TableCell>
                <TableCell>
                  <Badge type="primary">{`${_class.style} - Level ${
                    _class.level === "one" ? 1 : _class.level === "two" ? 2 : 3
                  }`}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </Layout>
  )
}

export default classes

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 7

  const endpoint = `${API_URL}/graphql`

  const todaysDate = format(new Date(), "yyyy-MM-dd")

  const query = gql`
    query getClasses($start: Int, $todaysDate: Date) {
      classes(
        limit: 7
        start: $start
        sort: "date:asc, time:asc"
        where: { date_gte: $todaysDate }
      ) {
        date
        time
        Title
        style
        description
        level
        instructor {
          Title
          Slug
          avatar {
            formats
          }
        }
      }
      classesConnection(where: { date_gte: $todaysDate }) {
        aggregate {
          count
        }
      }
    }
  `

  const variables = {
    start,
    todaysDate,
  }

  const data = await request(endpoint, query, variables)
  console.log(JSON.stringify(data, undefined, 2))

  return {
    props: {
      classList: data,
      page: page,
      todaysDate,
    },
  }
}
