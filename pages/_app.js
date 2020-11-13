import Head from "next/head"
// import "../styles/base.css"
import "../styles/main.css"
import { AuthProvider } from "../context/UserAuthContext"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion</title>
      </Head>
      <AuthProvider>
        <Component className="font-inter antialiased tracking-tight" {...pageProps} />
      </AuthProvider>
    </>
  )
}
