import { Html, Head, Main, NextScript } from "next/document";
import { IdTagManager, domin } from "@/api/config";

export default function Document() {
  const gtm = IdTagManager[domin];

  return (
    <Html lang="fa" dir="rtl">
      <Head></Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
