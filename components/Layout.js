import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-darkBlueBg">
      <Header />
      <main className="mt-40 flex-grow px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
