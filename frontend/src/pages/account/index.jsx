import styles from "./styles.module.scss";
import Link from "next/link";
import { LogoMenor } from "../../components/Logo"
import Image from 'next/image'
import foto from "../account/foto-teste.png";
import SlideBar from "../../components/ui/SlideBar"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function myAccount() {
    const { user } = useContext(AuthContext);

    return (
        <div className={styles.container}>
            <div className={styles.containerLogoAccount}>
                <SlideBar />
                <LogoMenor />
            </div>
            <div className={styles.modalAccount}>
                <div className={styles.photo}>
                    <Image src={foto} width={150} height={150} />
                </div>
                <div className={styles.dados}>
                <p>Nome:</p><p>{user.nome}</p>
                <p>E-mail:</p><p>{user.email}</p>
                <p>Senha: **********</p>
                <p>Minha matricula:</p>
                </div>
                <div className={styles.containerButton}>
                    <Link href={"/contract"} >
                        <button className={styles.buttonMyAccount}>Acessar histórico</button>
                    </Link>
                    <Link href={"/"}>
                        <button className={styles.buttonLogout} >Sair da conta</button>
                    </Link>
                </div>
            </div>

        </div>

    );

}