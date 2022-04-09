import styles from "./styles.module.scss";

export default function Input({ placeholder, type, ...rest}){
    return(
        <input 
         className={styles.input}
         placeholder={placeholder}
         type={type}
         {...rest}
        />
    )
}