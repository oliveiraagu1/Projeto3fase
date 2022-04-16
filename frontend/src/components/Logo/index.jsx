import styles from './styles.module.scss';
import Image from 'next/image';
import imageLogo from '../../../public/assets/logo.svg';
import imageHome from '../../../public/assets/logoHome.svg';

export function Logo(){
    return(
        <div>
            <Image src={imageLogo} width={450} height={250} alt="Image Logo" />
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
            <Image src={imageLogo} width={50} height={50} alt="Image small" />
        </div>
    )
}