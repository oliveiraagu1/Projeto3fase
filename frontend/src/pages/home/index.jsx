import {useState, useContext} from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {

    const { user, setUser } = useContext(AuthContext);

    return(
        <section className={styles.fullContainer}>
            <div className={styles.containerHistorico}>
                <div className={styles.historicoUm} >
                    <h1>#01</h1>
                    <h2>Aluguel 10293</h2>
                    <h2>10/04/2022</h2>
                </div>
                <div className={styles.historicoDois}>
                    <h1>02</h1>
                    <h2>Aluguel 24002</h2>
                    <h2>03/04/2022</h2>
                </div>
                <div className={styles.historicoDois}>
                    <h1>03</h1>
                    <h2>aluguel 11583</h2>
                    <h2>27/03/2022</h2>
                </div>
            </div>
            <h1>Home</h1>
        </section>
    )
}