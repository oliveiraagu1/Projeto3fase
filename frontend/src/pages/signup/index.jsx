import {useState, useContext} from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import {LogoMenor} from "../../components/Logo"
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import {toast} from "react-toastify";
import {AuthContext} from "../../contexts/AuthContext";

export default function SignUp() {

    const {signUp} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [register, setRegister] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSignup(event) {
        event.preventDefault();

        if (email === '' || password === '' || name === '' || register === '') {
            return toast.warning("Preencha todos os campos!");
        }
        setLoading(true);

        let data = {
            email,
            password,
            name,
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

            <div className={styles.modalContainerMain}>


                <main className={styles.main}>


                    <LogoMenor/>

                    <h1>Cadastro</h1>

                    <form onSubmit={handleSignup}>
                        <label className={styles.textLogin}>Email:</label>
                        <Input
                            placeholder="Digite o seu e-mail"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label className={styles.textLogin}>Nome:</label>
                        <Input
                            placeholder="Digite o seu nome"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label className={styles.textLogin}>Confirme a senha:</label>
                        <Input
                            placeholder="Digite a sua senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label className={styles.textLogin}>Matrícula:</label>
                        <Input
                            placeholder="Digite sua matrícula"
                            type="text"
                            value={register}
                            onChange={e => setRegister(e.target.value)}
                        />
                        <Button type="submit" loading={loading}>
                            CADASTRAR
                        </Button>

                        <Link href={"/"}>
                            <a className={styles.link}>Faça o Login!</a>
                        </Link>
                    </form>
                </main>
            </div>
        </div>
    );
}