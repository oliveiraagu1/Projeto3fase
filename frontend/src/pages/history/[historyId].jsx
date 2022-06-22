import { useState } from "react";
import { LogoMenor } from "../../components/Logo";
import { FaArrowLeft } from "react-icons/fa";
import { canSSRAuth } from "../../utils/canSSRAuth";
import Link from "next/link";
import Head from "next/head";
import styles from "./styles.module.scss";
import SlideBar from "../../components/ui/SlideBar";

export default function HistoryItem() {
  const [visible, setVisible] = useState(false);

  const name = "Gustavo";
  const contract = 122093;

  return (
    <div className={visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Histórico {name}</title>
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
        <h1>Histórico do contrato {contract}</h1>
      </div>

      <main className={styles.main}>
        <div className={styles.titleMain}>
          <Link href={"/history"}>
            <a>
              <FaArrowLeft size={24} color="#000" />
            </a>
          </Link>
          <p>Registro do contrato</p>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {

  return{
    props: {}
  }

})

