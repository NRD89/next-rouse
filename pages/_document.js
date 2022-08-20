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

          {/* <!-- Facebook Pixel Code --> */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '564321418233630');
              fbq('track', 'PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=564321418233630&ev=PageView&noscript=1"
            />
          </noscript>
          {/* <!-- End Facebook Pixel Code --> */}

          <meta
            name="facebook-domain-verification"
            content="pn6fxdti0vzpaacjqym8c4dcofe0wl"
          />

          <script
            async
            defer
            data-domain="rouse.yoga"
            src="https://plausible.io/js/plausible.js"
          />
          {/* Noscript content for added SEO */}
          <noscript>
            <a
              href="https://www.eventbrite.com/e/azension-tickets-372252586507"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Tickets on Eventbrite
            </a>
          </noscript>

          <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var exampleCallback = function() {
                console.log('Order complete!');
            };
            window.EBWidgets.createWidget({
                widgetType: 'checkout',
                eventId: '372252586507',
                modal: true,
                modalTriggerElementId: 'eventbrite-widget-modal-trigger-372252586507',
                onOrderComplete: exampleCallback
            });`,
            }}
          ></script>
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
