import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { setupAPIClient } from "../../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { LogoHome } from "../../components/Logo";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss";
import Head from "next/head";
import Link from "next/link";
import SlideBar from "../../components/ui/SlideBar";
import PieChart from "./PieChart";

export default function Home() {
  const { user, handleGraphic, graphic } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  useLayoutEffect( () => {
    handleGraphic();
  } , []);

  const dados = [
    {
      id: 1,
      value: graphic.rent,
    },
    {
      id: 2,
      value: graphic.sales,
    },
  ];

  const UserData = {
    labels: ["Aluguel", "Venda"],

    datasets: [
      {
        data: dados.map((data) => data.value),
        backgroundColor: ["#57DACC", "#006D77"],
      },
    ],
  };

  return (
    <section className={styles.fullContainer}>
      <Head>
        <title>Grow - Home</title>
      </Head>
      <button
        className={globalStyles.burguerContainer}
        onClick={() => setVisible(!visible)}
      >
        <SlideBar visible={visible} />
      </button>

      <div className={styles.mainHome}>
        <div
          className={
            visible
              ? styles.containerHistorico
              : styles.containerHistoricoClosed
          }
        >
            <div className={styles.ContainerDicas}>
              <p>“O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.”</p>
              <p>Michael Jordan</p>
            </div>
            <div className={styles.ContainerDicas}>
              <p>“O sucesso nas vendas é resultado de disciplina, dedicação e sacrifício.”</p>
              <p>Thomas Roy Cromwell</p>
            </div>
        </div>

        <div className={styles.grow}>
          <LogoHome className={styles.filter} />
        </div>

        <div className={styles.containerGrafico}>
          <PieChart chartData={UserData} />
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={globalStyles.nameFooter}>{user.name}</p>
      </footer>
    </section>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  
  return {
    props: {},
  };
});
