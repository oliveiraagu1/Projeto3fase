import "../../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../contexts/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  );
}
