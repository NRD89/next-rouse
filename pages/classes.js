import React from "react"
import Layout from "../components/Layout"
// import dynamic from "next/dynamic"

// const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
//   ssr: false,
// })

const classes = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-gray-100 h1 mb-10">Class Schedule</h1>
        <img
          className="mb-10"
          src="https://backend.rouse.yoga/uploads/large_live_stream_schedule_Page_1_ee55dee627.png"
          alt="Rouse Yoga Schedule Week 1"
        />
        <img
          src="https://backend.rouse.yoga/uploads/large_live_stream_schedule_Page_2_6bea141245.png"
          alt="Rouse Yoga Schedule Week 2"
        />
      </div>
    </Layout>
  )
}

export default classes
