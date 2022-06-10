import { useState, useContext } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import ContractItem from "../../components/ui/ContractItem";
import SlideBar from "../../components/ui/SlideBar";
import { LogoMenor } from "../../components/Logo";

export default function Contract() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={ visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Tela contrato</title>
      </Head>

    <div className={styles.containerLogoSlideBar}>
      <button
        className={styles.burguerContainer}
        onClick={() => setVisible(!visible)}
      >
        <SlideBar visible={visible} />
      </button>
        <LogoMenor />
    </div>
      <div className={styles.titleHistorico}>
        <h1>Meu histórico</h1>
      </div>

      <div className={styles.grid}>
        <ContractItem data={{ id: 1 }} />
        <ContractItem data={{ id: 2 }} />
        <ContractItem data={{ id: 3 }} />
        <ContractItem data={{ id: 4 }} />
        <ContractItem data={{ id: 5 }} />
        <ContractItem data={{ id: 6 }} />
      </div>
    </div>
  );
}
