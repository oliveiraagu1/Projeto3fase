import styles from "./styles.module.scss";
import {FaSpinner} from "react-icons/fa";

export default function Button({loading, children}) {
    return (
        <button className={styles.button} disabled={loading}>
            {loading ? (
                <FaSpinner color="#FFF" size={16}/>
            ) : (
                <a className={styles.buttonText}>{children}</a>
            )}
        </button>
    );
}
