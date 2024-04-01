import Header from "@/components/header";
import RootLayout from "../layout";
import { Box, Tab  , Tabs} from "@mui/material";
import BasicTabs from "@/components/tabs";
import { useEffect, useState } from "react";
import strapi from "@/axios";

export default function Archive(){
    function handleChange(){
        
    }
 


    return(
        <RootLayout>
                    <Header/>
             <div className="col-lg-12 col-xs-12 archive-banner d-flex flex-column justify-content-center align-items-center">
                 <div className="mb-3"><img src="/assets/images/phoneNumber.png"/></div>
                 <span style={{color:'#fff' , fontSize:'16px'}}>011-544451500</span>
             </div>
             <div className="col-xs-12 col-lg-12 mt-2 mb-2">
         <BasicTabs/>
             </div>
    </RootLayout>        
    )
}