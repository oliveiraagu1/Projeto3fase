import styles from './styles.module.scss';
import Image from 'next/image'
export function Logo(){
    return(
        <div>
            <img src="/assets/logo.svg" width={450} height={250}  />
        </div>
    )
}
export function LogoHome(){
    return(
        <div>
            <Image src="/assets/logoHome.svg" width={450} height={250}  />
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