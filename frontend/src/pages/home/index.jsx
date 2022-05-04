import {useState, useContext} from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import Drawer from "../../components/ui/Drawer";
import { LogoHome } from "../../components/Logo";

export default function Home() {

    const {user} = useContext(AuthContext);
    const [visible, setVisible] = useState(false);


    return(
        <section className={styles.fullContainer}>

            <button className={styles.burguerContainer} onClick={() => setVisible(!visible)}>
                <Drawer visible={visible} />
            </button>

            <div className={styles.containerHistorico}>
                <button className={styles.historicoUm} >
                    <h1>#01</h1>
                    <h2>Aluguel 10293</h2>
                    <h2>10/04/2022</h2>
                </button>
                <button className={styles.historicoDois}>
                    <h1>#02</h1>
                    <h2>Aluguel 24002</h2>
                    <h2>03/04/2022</h2>
                </button>
                <button className={styles.historicoDois}>
                    <h1>#03</h1>
                    <h2>Aluguel 11583</h2>
                    <h2>27/03/2022</h2>
                </button>
            </div>
            <div className={styles.grow}>
                <LogoHome className={styles.filter} />
            </div>
            <footer className={styles.footer}>
                <h1>{user.name}</h1>
            </footer>
        </section>
    )
}