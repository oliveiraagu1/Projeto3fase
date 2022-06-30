import { LogoMenor } from "../../components/Logo";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { FaEraser, FaUserAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { destroyCookie } from "nookies";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss";
import Link from "next/link";
import SlideBar from "../../components/ui/SlideBar";
import ModalSenha from "../../components/ui/ModalPassword";


export default function myAccount() {
  const { user, handleDeleteAccount } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleSignOut() {
    destroyCookie(undefined, "@nextauth.token");
    toast.success("Deslogado com sucesso! 👋");
  }

  return (
    <div className={modalVisible ? styles.containerModal : styles.container}>
      <div className={globalStyles.containerLogoAccount}>
        <button
          className={globalStyles.burguerContainer}
          onClick={() => setVisible(!visible)}
        >
          <SlideBar visible={visible} />
        </button>
        <LogoMenor />
      </div>
      <div className={globalStyles.modal}>
        <div className={styles.photo}>
          <AiOutlineUser size={50} />
        </div>
        <div className={styles.dados}>
          <div className={styles.containerElementos}>
            <p>Nome:</p>
            <p>{user.name}</p>
          </div>
          <div className={styles.containerElementos}>
            <p>E-mail:</p>
            <p>{user.email}</p>
          </div>
          <div className={styles.containerElementos}>
            <p>Senha: **********</p>
            <button
              className={styles.buttonSenha}
              onClick={() => setModalVisible(true)}
            >
              <ModalSenha
                modalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
              />
            </button>
          </div>
          <div className={styles.containerElementos}>
            <p>Minha matricula:</p>
            <p>{user.registration}</p>
          </div>
        </div>
        <div className={styles.containerButton}>
          <Link href={"/history"}>
            <button className={styles.buttonMyAccount}>
              Acessar histórico
            </button>
          </Link>
          <Link href={"/"}>
            <button className={styles.buttonLogout} onClick={handleSignOut}>
              Sair da conta
            </button>
          </Link>

          <button className={styles.buttonLogout} onClick={handleDeleteAccount}>
            Excluir conta
          </button>
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps = canSSRAuth(async (context) => {
//   return {
//     props: {},
//   };
// });
