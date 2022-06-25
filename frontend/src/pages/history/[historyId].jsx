import { useState } from "react";
import { LogoMenor } from "../../components/Logo";
import { FaArrowLeft } from "react-icons/fa";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { AiOutlineEdit } from "react-icons/ai";
import { setupAPIClient } from "../../services/api";
import Link from "next/link";
import Head from "next/head";
import styles from "./styles.module.scss";
import SlideBar from "../../components/ui/SlideBar";

export default function HistoryId({ historyContract }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={visible ? styles.container : styles.containerClose}>
      <Head>
        <title>Grow - Histórico {historyContract.propertyCode}</title>
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
        <h1>Histórico do contrato </h1>
      </div>

      <main className={styles.main}>
        <div className={styles.titleMain}>
          <div className={styles.arrowLeft}>
            <Link href={"/history"}>
              <a>
                <FaArrowLeft size={24} color="#000" />
              </a>
            </Link>
          </div>
          <div className={styles.titleText}>
            <p>Registro do contrato</p>
          </div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.contractContent}>
            <label>Nome:</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                placeholder="Casa Vargem Grande"
              />
              <AiOutlineEdit size={15} className={styles.editIcon} />
            </div>
          </div>

          <div className={styles.contractContent}>
            <label>Matricula Funcionário:</label>
            <div className={styles.input}>
              <label>241232</label>
            </div>
          </div>

          <div className={styles.contractContent}>
            <label>Data:</label>
            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="24/04/2021" />
              <AiOutlineEdit size={15} className={styles.editIcon} />
            </div>
          </div>
          <div className={styles.contractContent}>
            <label>Código do Imóvel:</label>
            <div className={styles.input}>
              <label>1231232</label>
            </div>
          </div>

          <div className={styles.contractContent}>
            <label>Tipo de Imóvel:</label>
            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="Casa" />
              <AiOutlineEdit size={15} className={styles.editIcon} />
            </div>
          </div>

          <div className={styles.contractContent}>
            <label>Tipo de Contrato:</label>
            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="Alguel" />
              <AiOutlineEdit size={15} className={styles.editIcon} />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const { historyId } = context.params;

  const apiClient = setupAPIClient(context);
  const response = await apiClient.get(`contract/list/${historyId}`);

  return {
    props: {
      historyContract: response.data[0],
    },
  };
});
