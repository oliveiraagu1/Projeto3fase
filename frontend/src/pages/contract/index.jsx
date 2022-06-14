import React, { useState, useContext } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import SlideBar from "../../components/ui/SlideBar";
import { FormContract } from "../../components/ui/FormContract";
import { LogoMenor } from "../../components/Logo";
import { AuthContext } from '../../contexts/AuthContext';

export default function Contract() {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  return (
    <div className={visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Cadastre um contrato</title>
      </Head>

      <button
        className={styles.burguerContainer}
        onClick={() => setVisible(!visible)}
      >
        <SlideBar visible={visible} />
      </button>

      <div className={styles.image}>
        <LogoMenor />
      </div>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Registe um contrato</h1>
        </div>

        <div className={styles.grid}>
          <FormContract />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>{user.name}</p>
      </footer>
    </div>
  );
}
