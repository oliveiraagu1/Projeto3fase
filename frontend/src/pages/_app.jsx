import "../../styles/globals.scss";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from "../contexts/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
      <Head>
         <link rel="shortcut icon" href="../../favicon.ico" />
       </Head>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </>
  );
}
