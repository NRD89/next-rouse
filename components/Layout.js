import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

const Layout = ({ children, metaTitle, metaDescription }) => {
  return (
    <div className="flex flex-col  overflow-hidden bg-darkBlueBg">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <main className="pt-40 flex-grow px-8 min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
