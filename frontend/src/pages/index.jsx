import { useState } from "react";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import { toast } from "react-toastify";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    if(email === '' || password === ''){
      return toast.warning("Preencha todos os campos!");
   }
  }

  return (
    <div className={styles.container}>
       <Head>
         <title>Grow - Faça seu login</title>
       </Head>

        <div>
            <h2>Image</h2>
            <div className={styles.main}>

                <h2 className={styles.logo}>Grow</h2>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <Input
                        placeholder="Digite o seu e-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Senha:</label>
                    <Input
                        placeholder="Digite a sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button loading={loading} type="submit">
                        Entrar
                    </Button>

                    <a href={"/signup"} className={styles.link}>Não tem cadastro? Cadastre-se!</a>
                </form>
            </div>
        </div>
    </div>
  );
}