import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { canSSRAuth } from '../../utils/canSSRAuth';
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

                    <Link href={"/home"}>
                        <a className={styles.link}>Voltar</a>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export const getServerSideProps = canSSRAuth(async (context) => {

    return {
        props: {
            
        }
    }
})