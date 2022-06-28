import React, { useState, useContext, useLayoutEffect } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss"
import HistoryItem from "../../components/ui/HisotryItem";
import SlideBar from "../../components/ui/SlideBar";
import { LogoMenor } from "../../components/Logo";
import { AuthContext } from "../../contexts/AuthContext";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { setupAPIClient } from "../../services/api";
import { FaTruckMonster } from "react-icons/fa";

export default function History({ contractList }) {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const [data] = useState(contractList.filter( index => index.userId === user.id));

  return (
    <div className={visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Histórico de contratos</title>
      </Head>

      <button
        className={globalStyles.burguerContainer}
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
        {data.map((item) => (
          <HistoryItem data={item} key={item.id} />
        ))}
      </div>

      {data.length === 0 && (
        <div className={styles.empty}>
          <span>Você não possui nenhum cadastro no sistema.... 🙁</span>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupAPIClient(context);

  const response = await apiClient.get('contract/list');

  return {
    props: {
      contractList: response.data,
    },
  };
});