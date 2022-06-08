import styles from "./styles.module.scss";
import Link from "next/link";
import { LogoMenor } from "../../components/Logo"
import Image from 'next/image'
import foto from "../account/foto-teste.png";


export default function myAccount() {

    return (
        <div className={styles.container}>
            <Link href={"/home"}>Minha conta</Link>
            <LogoMenor />
            <div className={styles.modalAccount}>
                <div className={styles.photo}>
                    <Image src={foto} width={150} height={150} />
                </div>
               <button className={styles.buttonMyAccount}>Acessar histórico</button>
               <Link href={"/"}> 
                 <button className={styles.buttonMyAccount} >Sair da conta</button>
               </Link>
            </div>
            
        </div>

    );

}