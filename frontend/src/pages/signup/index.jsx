import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignUp() {

    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [register, setRegister] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSignup(event) {
        event.preventDefault();

        if(email === '' || password === '' || secondPassword === '' || register === ''){
            return toast.warning("Preencha todos os campos!");
        }
        setLoading(true);

        let data = {
            email,
            password,
            secondPassword,
            register
        }
        await signUp(data);
        setLoading(false);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Grow - Faça seu cadastro</title>
            </Head>

            <div className={styles.main}>

                <main className={styles.main2}>

                    <h2 className={styles.logo}>Grow</h2>

                    <h1>Cadastro</h1>

                    <form onSubmit={handleSignup}>
                        <label>Email:</label>
                        <Input
                            placeholder="Digite o seu e-mail"
                            type="text"
                            value={email}
                           onChange={ e => setEmail(e.target.value) }
                        />
                        <label>Senha:</label>
                        <Input
                            placeholder="Digite a sua senha"
                            type="password"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                        <label>Confirme a senha:</label>
                        <Input
                            placeholder="Digite novamente a senha"
                            type="password"
                            value={secondPassword}
                            onChange={ e => setSecondPassword(e.target.value)}
                        />
                        <label>Matrícula:</label>
                        <Input
                            placeholder="Digite sua matrícula"
                            type="text"
                            value={register}
                            onChange={ e  => setRegister(e.target.value)}
                        />
                        <Button type="submit" loading={loading}>
                            Entrar
                        </Button>

                        <Link href={"/"} >
                            <a className={styles.link}>Não tem cadastro? Cadastre-se!</a>
                        </Link>
                    </form>
                </main>
            </div>
        </div>
    );
}