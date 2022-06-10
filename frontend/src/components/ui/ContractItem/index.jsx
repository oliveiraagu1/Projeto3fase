import Link from "next/link";
import styles from "./styles.module.scss";
import { FiMoreVertical } from "react-icons/fi";

export default function ContractItem({ data }) {
  return (
    <Link href={`/contract/${data.id}`}>
      <a className={styles.container}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <img src='./assets/iconEdit.png'/>
          </div>
          <div className={styles.containerInfosContract}>
            <p className={styles.name}>Contrato Anual</p>
            <p className={styles.register}>12050568</p>
          </div>
          <FiMoreVertical size={20} color='#545454' />
        </div>
      </a>
    </Link>
  );
}
