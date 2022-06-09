import styles from "./styles.module.scss"
import Image from "next/image";
import burguer from "../../../../../public/assets/hamburguer.svg"
import {LogoMenor} from "../../../Logo"
import {FaChevronRight , FaHome, FaUserAlt, FaBookmark, FaWpforms} from 'react-icons/fa'

export default function SubSlide(){
    return(
        <section className={styles.openedSlidebar}>
            <div className={styles.sliderConatainer}>
                <div className={styles.burguerSlider}>
                <Image src={burguer} width={25} height={25}/>
                </div>
                <div className={styles.title} ><LogoMenor /></div>
                <div className={styles.buttonsContainer}>
                    <div className={styles.lowOpacity}>
                        <FaHome size={20} />
                    <button className={styles.button}>Home</button>
                    <FaChevronRight size={15} />
                    </div>

                    <div className={styles.fullOpacity}>
                        <FaUserAlt size={20} color={"white"} />
                    <button className={styles.button}>Meu Perfil</button>
                    <FaChevronRight size={15} />
                    </div>

                    <div className={styles.lowOpacity}>
                        <FaBookmark size={20} />
                    <button className={styles.button}>Meu Histórico</button>
                    <FaChevronRight size={15} />
                    </div>

                    <div className={styles.fullOpacity}>
                        <FaWpforms size={20} color={"white"} />
                    <button className={styles.button}>Adicionar Contrato</button>
                    <FaChevronRight size={15} />
                    </div>
                </div>
            </div>

        </section>
    )
}