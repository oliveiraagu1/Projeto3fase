import Link from "next/link";
import styles from "./styles.module.scss";
import { FiMoreVertical } from "react-icons/fi";

export default function HistoryItem({ data }) {

  return (
    <Link href={`/history/${data.id}`}>
      <a className={styles.container}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <img src='./assets/iconEdit.png'/>
          </div>
          <div className={styles.containerInfosContract}>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.register}>{data.propertyCode}</p>
          </div>
          <FiMoreVertical size={20} color='#545454' />
        </div>
      </a>
    </Link>
  );
}
