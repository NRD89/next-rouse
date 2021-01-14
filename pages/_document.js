import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="theme-color" content="#ffffff" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
              document.querySelector('html').classList.add('dark');
          } else {
              document.querySelector('html').classList.remove('dark');
          }        `,
            }}
          />
        </Head>
        <body className="font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight">
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
