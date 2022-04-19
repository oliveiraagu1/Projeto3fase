import styles from './styles.module.scss';
import Image from 'next/image';
import imageLogo from '../../../public/assets/logo.svg';
import imageHome from '../../../public/assets/logoHome.svg';

export function Logo(){
    return(
<<<<<<< HEAD
        <div className={styles.LogoAnimada}>
            <img src="/assets/logo.svg" width={450} height={250}  />
=======
        <div>
            <Image src={imageLogo} width={450} height={250} alt="Image Logo" />
        </div>
    )
}
export function LogoHome(){
    return(
        <div>
            <Image src={imageHome} width={450} height={250} alt="Image home" />
>>>>>>> b63cabd36b874786d064f2e1284d59ca86af1ff6
        </div>
    )
}

export function LogoMenor(){
    return(
        <div className={styles.containerLogoMenor}>
            <Image src={imageLogo} width={50} height={50} alt="Image small" />
        </div>
    )
}