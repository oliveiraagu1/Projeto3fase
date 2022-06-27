import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss"
import Link from "next/link";
import { LogoMenor } from "../../components/Logo";
import SlideBar from "../../components/ui/SlideBar";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { FaEraser, FaUserAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

export default function myAccount() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.containerLogoAccount}>
        <SlideBar />
        <LogoMenor />
      </div>
      <div className={globalStyles.modal}>
        <div className={styles.photo}>
          <AiOutlineUser size={50} />
        </div>
        <div className={styles.dados}>
          <div className={styles.containerElementos}>
            <p>Nome:</p>
            <p>{user.nome}</p>
          </div>
          <div className={styles.containerElementos}>
            <p>E-mail:</p>
            <p>{user.email}</p>
          </div>
          <div className={styles.containerElementos}>
            <p>Senha: **********</p>
            <Link href={"/modalPassword"}>
              <button className={styles.buttonSenha}>
                <FaEraser width={20} />
              </button>
            </Link>
          </div>
          <div className={styles.containerElementos}>
            <p>Minha matricula:</p>
            <p>{user.registration}</p>
          </div>
        </div>
        <div className={styles.containerButton}>
          <Link href={"/contract"}>
            <button className={styles.buttonMyAccount}>
              Acessar histórico
            </button>
          </Link>
          <Link href={"/"}>
            <button className={styles.buttonLogout}>Sair da conta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
