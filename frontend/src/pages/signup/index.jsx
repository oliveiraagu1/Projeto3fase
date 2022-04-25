import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { LogoMenor } from "../../components/Logo"
import { FormSignup } from "../../components/ui/FormSignup";


export default function SignUp() {


    return (
        <div className={styles.container}>
            <Head>
                <title>Grow - Faça seu cadastro</title>
            </Head>

            <div className={styles.modalContainerMain}>

                <main className={styles.main}>

                    <LogoMenor/>

                    <h1>Cadastro</h1>

                    <FormSignup/>

                    <Link href={"/"}>
                        <a className={styles.link}>Faça o Login!</a>
                    </Link>
                </main>
            </div>
        </div>
    );
}