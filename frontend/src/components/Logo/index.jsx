import styles from './styles.module.scss';

export function Logo(){
    return(
        <div className={styles.logo}>
            <img src="/assets/logo.svg" width={450} height={250}  />
        </div>
    )
}

export function LogoMenor(){
    return(
        <div className={styles.containerLogoMenor}>
            <img src="/assets/logo.svg" width={50} height={50}  />
        </div>
    )
}