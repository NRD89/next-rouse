import { useEffect } from "react";
// import { useRouter } from "next/router"
// import * as gtag from "../lib/gtag"
import Head from "next/head";
// import "../styles/base.css"
import "../styles/main.css";
import { AuthProvider } from "../context/UserAuthContext";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../myTheme";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on("routeChangeComplete", handleRouteChange)
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange)
  //   }
  // }, [router.events])

  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Windmill theme={myTheme}>
        <Component {...pageProps} />
      </Windmill>
    </ThemeProvider>
  );
}
