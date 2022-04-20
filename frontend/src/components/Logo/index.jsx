import styles from './styles.module.scss';
import Image from 'next/image';
import imageLogo from '../../../public/assets/logo.svg';
import imageHome from '../../../public/assets/logoHome.svg';
import g from '../../../public/assets/g.svg'
import r from '../../../public/assets/r.svg'
import o from '../../../public/assets/o.svg'
import w from '../../../public/assets/w.svg'

export function Logo(){
    return(
        <div className={styles.containerLogo}>
            <Image src={g} width={150} height={150} alt="Letra G" className={styles.logo} style={{animationDelay: "0ms"}} />
            <Image src={r} width={150} height={150} alt="Letra R" className={styles.logo} style={{animationDelay: "100ms"}} />
            <Image src={o} width={150} height={150} alt="Letra O" className={styles.logo} style={{animationDelay: "200ms"}} />
            <Image src={w} width={250} height={270} alt="Letra W" className={styles.logo} style={{animationDelay: "300ms"}} />
        </div>
    )
}
export function LogoHome(){
    return(
        <div>
            <Image src={imageHome} width={450} height={250} alt="Image home" />
        </div>
    )
}

export function LogoMenor(){
    return(
        <div className={styles.containerLogoMenor}>
            <Image src={imageLogo} width={50} height={50} alt="Image small" className={styles.logoMenor} />
        </div>
    )
}