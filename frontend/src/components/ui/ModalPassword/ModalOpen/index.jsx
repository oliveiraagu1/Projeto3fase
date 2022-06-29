import styles from './styles.module.scss'
import Link from "next/link";

export default function ModalOpen({ onClose }) {
    return (
        <div className={styles.container} onClick={onClose} >
            <div className={styles.content}>
                <div className={styles.inputContainer}>
                    <label>Senha Atual: </label>
                    <input type="password" className={styles.inputs} placeholder="Digite sua senha atual" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Nova Senha: </label>
                    <input type="password" className={styles.inputs} placeholder="Digite sua nova senha" />
                </div>
                <button>Confirmar</button>
                <Link href={"/account"}>
                <button onClick={() => onClose}>Cancelar</button>
                </Link>
                
            </div>
        </div>
    )
}