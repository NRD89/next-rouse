import Head from "next/head"
// import "../styles/base.css"
import "../styles/main.css"
import { AuthProvider } from "../context/UserAuthContext"
import { Windmill } from "@windmill/react-ui"
import myTheme from "../myTheme"

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Rouse Yoga</title>
      </Head>
      <Windmill theme={myTheme}>
        <Component
          className="font-inter antialiased tracking-tight"
          {...pageProps}
        />
      </Windmill>
    </AuthProvider>
  )
}
