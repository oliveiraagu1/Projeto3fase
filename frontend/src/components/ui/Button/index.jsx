import globalStyles from "../../../../styles/global.module.scss"
import {FaSpinner} from "react-icons/fa";

export default function Button({loading, children}) {
    return (
        <button className={globalStyles.button} disabled={loading}>
            {loading ? (
                <FaSpinner color="#FFF" size={16}/>
            ) : (
                <a className={globalStyles.buttonText}>{children}</a>
            )}
        </button>
    );
}
