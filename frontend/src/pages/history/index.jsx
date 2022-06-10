import React, { useState, useContext, useLayoutEffect } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import HistoryItem from "../../components/ui/HisotryItem";
import SlideBar from "../../components/ui/SlideBar";
import { LogoMenor } from "../../components/Logo";

import { api } from '../../services/api';

export default function History() {
  const [visible, setVisible] = useState(false);
  const [contract, setContract] = useState([]);


  useLayoutEffect( () => {

   async function teste(){
      const response = await api.get(`/contract/list/1`)

      setContract(response.data)

      console.log(response.data)
    }
    teste();

  }, []);


  return (
    <div className={visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Histórico de contratos</title>
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
        {contract.map( (item) => (
          <React.Fragment key={item.id}>
            <HistoryItem data={item} />

          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
