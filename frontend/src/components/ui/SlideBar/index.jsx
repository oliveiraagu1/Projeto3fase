import Image from "next/image";
import imageDrawer from "../../../../public/assets/hamburguer.svg";
import SubSlideBar from "./SubSlideBar";

export default function SlideBar({ visible }){
    return(
       <div>
           {visible ? (
               <SubSlideBar/>
           ) : (
               <div>
                   <Image src={imageDrawer} width={20} height={20}  alt="Image drawer"/>
               </div>
           )}
       </div>
    )
} 