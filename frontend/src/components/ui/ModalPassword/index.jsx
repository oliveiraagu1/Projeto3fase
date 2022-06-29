import styles from "./styles.module.scss";
import { FaEraser } from "react-icons/fa";
import ModalOpen from './ModalOpen'


export default function modalPassword({ onClose ,  modalVisible }) {
    return (
        <div> {modalVisible ?(
            <div className={modalVisible ? styles.modalPassword : styles.modalPasswordOpen}>
                <ModalOpen modalVisible={modalVisible} onClose={onClose} />
            </div>) : (
                <FaEraser width={20} />
            )
        }
        </div>
    )
}