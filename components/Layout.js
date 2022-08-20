import HeaderNew from "./HeaderNew"
import FooterNew from "./FooterNew"
import Head from "next/head"

const Layout = ({ children, metaTitle, metaDescription }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Head>
        <title>{metaTitle} | Rouse Yoga</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <HeaderNew />
      <main className="pt-32 pb-12 md:pt-40 md:pb-20 flex-grow px-8 min-h-screen">
        {children}
      </main>
      <FooterNew />
    </div>
  )
}

export default Layout
