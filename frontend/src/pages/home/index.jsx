import { useState, useContext } from "react";
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

export default function Home({ contractList }) {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  console.log(contractList);

  const dados = [
    {
      id: 1,
      value: contractList.rent,
    },
    {
      id: 2,
      value: contractList.sales,
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
          <Link href={"/history"}>
            <button className={styles.historicoUm}>
              <h1>#01</h1>
              <h2>Aluguel 10293</h2>
              <h2>10/04/2022</h2>
            </button>
          </Link>
          <Link href={"/history"}>
            <button className={styles.historicoDois}>
              <h1>#02</h1>
              <h2>Aluguel 24002</h2>
              <h2>03/04/2022</h2>
            </button>
          </Link>
          <Link href={"/history"}>
            <button className={styles.historicoDois}>
              <h1>#03</h1>
              <h2>Aluguel 11583</h2>
              <h2>27/03/2022</h2>
            </button>
          </Link>
        </div>

        <div className={styles.grow}>
          <LogoHome className={styles.filter} />
        </div>

        <div className={styles.containerGrafico}>
          <PieChart chartData={UserData} />
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.nameFooter}>{user.name}</p>
      </footer>
    </section>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupAPIClient(context);

  const response = await apiClient.get(`contract/1`);

  return {
    props: {
      contractList: response.data,
    },
  };
});
