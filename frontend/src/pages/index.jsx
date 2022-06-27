import styles from "../../styles/global.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Logo, LogoMenor } from "../components/Logo";
import { FormLogin } from "../components/ui/FormLogin";
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Login() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Grow - Faça seu login</title>
      </Head>
      <div className={styles.modalLogin}>
        <Logo />
        <main className={styles.main}>
          <LogoMenor />
          <h1>Login</h1>
          <FormLogin />
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps = canSSRGuest(async (context) => {
  return {
      props:{}
  }
})
