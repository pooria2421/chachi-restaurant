
import { Slider } from "antd";
import RootLayout from "./layout";
import SliderCarousel from "@/components/slider";
import Header from "@/components/header";
import Link from "next/link";

export default function mainPage(){
    return (
        <RootLayout>    
        <Header/>
         
        <div className="slider">
          <SliderCarousel/>
        
        </div>


           <div className="archive d-flex d-flex mt-3">
           <div className="col-xs-4 col-lg-4 archive-image p-3"><Link href={'/archive/1'}><img src="/assets/images/archive1.jpg"/></Link></div>
           <div className="col-xs-4 col-lg-4 archive-image p-3"><Link href={'/archive/1'}><img src="/assets/images/archive1.jpg"/></Link></div>
           <div className="col-xs-4 col-lg-4 archive-image p-3"><Link href={'/archive/1'}><img src="/assets/images/archive1.jpg"/></Link></div>
    
           </div>
                


        </RootLayout>
    )
}