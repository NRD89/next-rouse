import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5d5dff" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#5D5DFF" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Poppins:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />

          <script
            async
            defer
            data-domain="rouse.yoga"
            src="https://plausible.io/js/plausible.js"
          />

        </Head>
        <body className="bg-white font-inter tracking-tight text-gray-900 antialiased dark:bg-black dark:text-gray-100">
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
