import { useState } from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import { toast } from "react-toastify";

export default function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [register, setRegister] = useState("");


    async function handlesignup(event) {
        event.preventDefault();

        if(email === '' || password === ''){
            return toast.warning("Preencha todos os campos!");
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Grow - Faça seu cadastro</title>
            </Head>

            <div className={styles.main}>
                <h1>Cadastro</h1>

                <form onSubmit={handlesignup}>
                    <label>Email:</label>
                    <Input
                        placeholder="Digite o seu e-mail"
                        type="text"
                        value={email} onChange={ e => setEmail(e.target.value) }
                    />
                    <label>Senha:</label>
                    <Input
                        placeholder="Digite a sua senha"
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <label>Repita a senha:</label>
                    <Input
                        placeholder="Repita a mesma senha"
                        type="password"
                        value={secondPassword}
                        onChange={ e => setSecondPassword(e.target.value) }
                    />
                    <label>Digite sua matrícula:</label>
                    <Input
                        placeholder="Digite a sua senha"
                        type="password"
                        value={register}
                        onChange={ e => setRegister(e.target.value) }
                    />

                    <Button type="submit">
                        CADASTRAR
                    </Button>
                    <a href={"/"} className={styles.link}>Faça Login!</a>
                </form>
            </div>
        </div>
    );
}