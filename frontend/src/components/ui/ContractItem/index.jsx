import Link from "next/link";
import styles from "./styles.module.scss";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";

export default function ContractItem({ data }) {



  return (
    <>
      <Link href={`/contract/${data.id}`}>
        {/* href={`/delivery/product/${data.id}` */}
        <a className={styles.container}>
          <div className={styles.info}>
            <div className={styles.buttonIcon}>
              <BiEditAlt color="#FF993A" size={24} className={styles.icon} />
            </div>
            <div>
              <div>
                <p className={styles.name}>{data.name}</p>
              </div>
              <div>
                <p className={styles.register}>{data.register}</p>
              </div>
            </div>
            <AiOutlineMore color="##909090" size={24} />
          </div>
        </a>
      </Link>
    </>
  );
}
