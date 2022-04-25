import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Logo, LogoMenor } from "../components/Logo";
import { FormLogin } from "../components/ui/FormLogin";

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
          <Link href={"/signup"}>
            <a className={styles.link}>Não tem cadastro? Cadastre-se!</a>
          </Link>
        </main>
      </div>
    </div>
  );
}
