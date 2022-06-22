import Image from "next/image";
import imageSubSlide from "../../../../public/assets/hamburguer.svg";
import SubSlide from "./SubSlide";
import styles from './styles.module.scss'

export default function SlideBar({ visible }){

    return(
       <div>
           {visible ? (
               <div className={visible ? styles.container : styles.closeContainer} >
               <SubSlide/>
               </div>
           ) : (
               <div>
                   <Image src={imageSubSlide} width={20} height={20}  alt="Image SubSlide"/>
               </div>
           )}
       </div>
    )
} 