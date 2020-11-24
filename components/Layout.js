import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-darkBlueBg">
      <Header />
      <main className=" flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
