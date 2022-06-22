import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import burguer from "../../../../../public/assets/hamburguer.svg";
import { LogoMenor } from "../../../Logo";
import {
  FaChevronRight,
  FaHome,
  FaUserAlt,
  FaBookmark,
  FaWpforms,
} from "react-icons/fa";

import { AuthContext } from '../../../../contexts/AuthContext';

export default function SubSlide() {

  const { user } = useContext(AuthContext);

  return (
    <section className={styles.openedSlidebar}>
      <div className={styles.sliderConatainer}>
        <div className={styles.burguerSlider}>
          <Image src={burguer} width={25} height={25} />
        </div>
        <div className={styles.title}>
          <LogoMenor />
        </div>

        <div className={styles.buttonsContainer}>
          <Link href={"/home"}>
            <div className={styles.lowOpacity}>
              <FaHome size={20} className={styles.iconLow}/>
              <a className={styles.button}>Home</a>
              <FaChevronRight size={15} />
            </div>
          </Link>

          <Link href={"/account"}>
            <div className={styles.fullOpacity}>
              <FaUserAlt size={20} color={"white"} className={styles.icon} />
              <a className={styles.button}>Meu Perfil</a>
              <FaChevronRight size={15} />
            </div>
          </Link>

          <Link href={"/history"}>
            <div className={styles.lowOpacity}>
              <FaBookmark size={20} className={styles.iconLow}/>
              <a className={styles.button}>Meu Histórico</a>
              <FaChevronRight size={15} />
            </div>
          </Link>

          <Link href={"/contract"}>
            <div className={styles.fullOpacity}>
              <FaWpforms size={20} color={"white"}  className={styles.icon} />
              <a className={styles.button}>Adicionar Contrato</a>
              <FaChevronRight size={15} />
            </div>
          </Link>

          {user.id === 1 && (
            <Link href={"/signup"}>
            <div className={styles.lowOpacity}>
              <FaWpforms size={20} color={"white"}  className={styles.icon} />
              <a className={styles.button}>Cadastrar usuário</a>
              <FaChevronRight size={15} />
            </div>
          </Link>
          )}



        </div>
      </div>
    </section>
  );
}
