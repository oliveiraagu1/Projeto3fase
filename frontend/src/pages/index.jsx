import { useState, useContext } from "react";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import {Logo, LogoMenor} from "../components/Logo";
import Link from "next/link";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { AuthContext } from "../contexts/AuthContext";

import { toast } from "react-toastify";

export default function Login() {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
      event.preventDefault();

      if(email === '' || password === ''){
          return toast.warning("Preencha todos os campos!");
      }
      setLoading(true);

      let data = {
          email,
          password
      }
      await signIn(data);

      setLoading(false);
  }

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
                <form onSubmit={handleLogin}>
                    <label className={styles.textLogin}>Email:</label>
                    <Input
                        placeholder="Digite o seu e-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={styles.textLogin}>Senha:</label>
                    <Input
                        placeholder="Digite a sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.MainButtonLogin}>
                        <Button loading={loading} type="submit">
                            ENTRAR
                        </Button>
                    </div>

                    <Link href={"/signup"} >
                        <a className={styles.link}>Não tem cadastro? Cadastre-se!</a>
                    </Link>
                </form>
            </main>
        </div>
    </div>
  );
}