import { useState, useContext } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import HistoryItem from "../../components/ui/HisotryItem";
import SlideBar from "../../components/ui/SlideBar";
import { LogoMenor } from "../../components/Logo";

export default function History() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={ visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Tela contrato</title>
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
      <div className={styles.title}>
        <h1>Meu histórico</h1>
      </div>

      <div className={styles.grid}>
        <HistoryItem data={{ id: 1 }} />
        <HistoryItem data={{ id: 2 }} />
        <HistoryItem data={{ id: 3 }} />
        <HistoryItem data={{ id: 4 }} />
        <HistoryItem data={{ id: 5 }} />
        <HistoryItem data={{ id: 6 }} />
      </div>
    </div>
  );
}
