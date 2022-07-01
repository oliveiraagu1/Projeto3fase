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



export default function myAccount() {
  const { user, handleDeleteAccount} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleSignOut() {
    destroyCookie(undefined, "@nextauth.token");
    toast.success("Deslogado com sucesso! 👋");
  }

  function changePassword() {
    alert('gustavo gay')
  }

  return (
    <div className={styles.container}>
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
            // --------- modal --------//
            {modalVisible ? <div className={modalVisible ? styles.containerModal : styles.container} >
              <div className={styles.contentModal}>
                <h1>Trocar Senha</h1>
                <div className={styles.inputContainerModal}>
                  <label>Senha Atual: </label>
                  <input type="password" className={styles.inputs} placeholder="Digite sua senha atual" />
                </div>
                <div className={styles.inputContainerModal}>
                  <label>Nova Senha: </label>
                  <input type="password" className={styles.inputs} placeholder="Digite sua nova senha" />
                </div>
                <button onClick={() => changePassword() }>Confirmar</button>

                <button onClick={() => setModalVisible(false)}>Cancelar</button>

              </div>
            </div>
              : <a
                className={styles.buttonSenha}
                onClick={() => setModalVisible(true)}
              >
                <FaEraser width={20} />
              </a>}

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
