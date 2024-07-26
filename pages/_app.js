import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/api/config";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({});

  const getInformation = () => {
    axios
      .get(`${onRun}/information/?Domain=${domin}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getInformation, []);
  return (
    <main>
      <ThemeProvider>
        <Head>
          <title>{data !== null ? data.Name : null}</title>
        </Head>
        <GoogleTagManager />
        <GoogleAnalytics />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
