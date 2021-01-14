import { useEffect } from "react"
import Head from "next/head"
// import "../styles/base.css"
import "../styles/main.css"
import { AuthProvider } from "../context/UserAuthContext"
import { Windmill } from "@windmill/react-ui"
import myTheme from "../myTheme"
import { ThemeProvider } from "next-themes"
import AOS from "aos"
import "aos/dist/aos.css"

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 750,
      easing: "ease-out-quart",
    })
  }, [])

  return (
    <AuthProvider>
      <ThemeProvider attribute="class">
        <Head>
          <title>Rouse Yoga</title>
        </Head>
        <Windmill theme={myTheme}>
          <Component {...pageProps} />
        </Windmill>
      </ThemeProvider>
    </AuthProvider>
  )
}
