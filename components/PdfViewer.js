import { useState } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  return (
    <div id="container">
      <div className="w-full " id="PdfContainer">
        <Document
          file={{
            url:
              "https://backend.rouse.yoga/uploads/LIVE_STREAM_SCHEDULE_3_7f076933fb.pdf",
          }}
          onLoadSuccess={onDocumentLoadSuccess}
          className="PDFDocument"
        >
          <Page
            className="PDFPage PDFPageOne"
            pageNumber={pageNumber}
            style={{ margin: `0 auto` }}
          />
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Page
            className="PDFPage"
            pageNumber={2}
            style={{ margin: `0 auto` }}
          />
          <p style={{ margin: `0` }}>Page 2 of {numPages}</p>
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <style jsx>{`
          #container {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          #PdfContainer {
            margin: auto;
            width: 65%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .PDFDocument {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .PDFPage {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
          }

          .PDFPageOne {
            margin-bottom: 25px;
          }

          .PDFPage > canvas {
            max-width: 100%;
            height: auto !important;
          }
        `}</style>
      </div>
    </div>
  )
}

export default PdfViewer
