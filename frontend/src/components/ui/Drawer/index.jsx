import Image from "next/image";
import imageDrawer from "../../../../public/assets/hamburguer.svg";
import SubDrawer from "./SubDrawer";

export default function Drawer({ visible }){
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