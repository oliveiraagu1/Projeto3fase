import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { LogoMenor } from "../../components/Logo";
import { FormSignup } from "../../components/ui/FormSignup";
import { FaArrowLeft } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
        <Head>
          <title>Grow - Faça seu cadastro</title>
        </Head>

        <div className={styles.modalContainerMain}>
          <main className={styles.main}>
            <div className={styles.containerHeader}>
              <Link href={"/home"}>
                <FaArrowLeft className={styles.link} />
              </Link>
              <LogoMenor className={styles.logoMenor} />
            </div>

            <h1>Cadastro</h1>

            <FormSignup />
          </main>
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps = canSSRAuth(async (context) => {
//   return {
//     props: {},
//   };
// });
