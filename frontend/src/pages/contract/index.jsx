import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { LogoMenor } from "../../components/Logo";
import ContractItem from "../../components/ui/ContractItem";
import styles from "./styles.module.scss";
import Head from "next/head";
import Link from "next/link";

export default function Contract() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grow - Meu histórico</title>
      </Head>
      <div>
        <LogoMenor />
      </div>

      {/*slide bar vai aqui*/}

      

      <main className={styles.main}>

      <div className={styles.title}>
        <h1>Meu histórico</h1>
      </div>

        <div className={styles.grid}>
          <ContractItem data={{id: 1, name: 'contrato Anual', register: 10000}}/>
          <ContractItem data={{id: 2, name: 'contrato Anual', register: 10000}}/>
          <ContractItem data={{id: 3, name: 'contrato Anual', register: 10000}}/>
          <ContractItem data={{id: 4, name: 'contrato Anual', register: 10000}}/>
          <ContractItem data={{id: 5, name: 'contrato Anual', register: 10000}}/>
          <ContractItem data={{id: 6, name: 'contrato Anual', register: 10000}}/>
        </div>
      </main>
    </div>
  );
}
