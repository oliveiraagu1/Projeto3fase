import { LogoMenor } from "../../components/Logo";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { FaEraser, FaUserAlt, FaArrowLeft } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { destroyCookie } from "nookies";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss";
import Link from "next/link";
import SlideBar from "../../components/ui/SlideBar";
import { ChangePassword } from "../../components/ui/ChangePassword";

export default function myAccount() {
  const { user, handleDeleteAccount } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleSignOut() {
    destroyCookie(undefined, "@nextauth.token");
    toast.success("Deslogado com sucesso! 👋");
  }

  function changePassword() {
    alert("gustavo gay");
  }

  return (
    <div className={styles.container}>
      <div className={modalVisible ? styles.pageOpacity : ""}>
        <button
          className={globalStyles.burguerContainer}
          onClick={() => setVisible(!visible)}
        >
          <SlideBar visible={visible} />
        </button>
        <div className={globalStyles.containerLogoAccount}>
          <LogoMenor />
        </div>
        <div
          className={
            modalVisible ? styles.modalWithOpacity : globalStyles.modal
          }
        >
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
              {modalVisible ? (
                <div
                  className={
                    modalVisible ? styles.containerModal : styles.container
                  }
                >
                  <div>
                    <div className={styles.contentModal}>
                      <div className={styles.containerTitle}>
                        <a
                          onClick={() => setModalVisible(false)}
                          className={styles.arrow}
                        >
                          <FaArrowLeft />
                        </a>
                        <h1>Trocar Senha</h1>
                      </div>
                      <div className={styles.inputContainerModal}>
                        <ChangePassword />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  className={styles.buttonSenha}
                  onClick={() => setModalVisible(true)}
                >
                  <FaEraser width={20} />
                </a>
              )}
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

            <button
              className={styles.buttonLogout}
              onClick={handleDeleteAccount}
            >
              Excluir conta
            </button>
          </div>
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
