import Image from "next/image";
import imageDrawer from "../../../../public/assets/hamburguer.svg";
import SubDrawer from "./SubSlide";

export default function SlideBar({ visible }){
    return(
       <div>
           {visible ? (
               <SubDrawer/>
           ) : (
               <div>
                   <Image src={imageDrawer} width={20} height={20}  alt="Image drawer"/>
               </div>
           )}
       </div>
    )
} 