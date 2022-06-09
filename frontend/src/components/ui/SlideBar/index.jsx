import Image from "next/image";
import imageSubSlide from "../../../../public/assets/hamburguer.svg";
import SubSlide from "./SubSlide";

export default function SlideBar({ visible }){
    return(
       <div>
           {visible ? (
               <SubSlide/>
           ) : (
               <div>
                   <Image src={imageSubSlide} width={20} height={20}  alt="Image SubSlide"/>
               </div>
           )}
       </div>
    )
} 