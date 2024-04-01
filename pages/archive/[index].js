import Header from "@/components/header";
import RootLayout from "../layout";
import { Box, Tab  , Tabs} from "@mui/material";
import BasicTabs from "@/components/tabs";
import { useEffect, useState } from "react";
import strapi from "@/axios";
import { useRouter } from "next/router";

export default function Archive(){
    function handleChange(){
        
    }
 


    return(
        <RootLayout>
                    <Header/>
             <div className="col-lg-12 col-xs-12 archive-banner d-flex flex-column justify-content-center align-items-center" style={{background:`url('/assets/images/archiveSlide.jpg')`,backgroundSize:'cover',height:'240px'}}>
                {/* <img src="/assets/images/phoneNumber.png"/></div> */}
           
             </div>
             
             <div className="col-xs-12 col-lg-12 mt-2 mb-2">
                
         <BasicTabs/>

             </div>
    </RootLayout>        
    )
}