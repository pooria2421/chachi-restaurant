import Header from "@/components/header";
import RootLayout from "../layout";
import { Box, Tab  , Tabs} from "@mui/material";
import BasicTabs from "@/components/tabs";
import { useEffect, useState } from "react";
import strapi, { baseURLImage } from "@/axios";
import { useRouter } from "next/router";
import QueryString from "qs";

export default function Archive(){

    const [archives, setArchives] = useState({galleryUrl : ''});
    const router = useRouter();

    useEffect(() => {
      strapi
        .get(
          "/archive-banner?populate=*" +
            "&" +
            QueryString.stringify(
              {
                filters: {},
              },
              { encode: false }
            )
        )
  
        .then((response) => {
          const data = response.data.data;

          const achiveList = {
            gallery:
            data.attributes.gallery.data !== null
              ? data.attributes.gallery.data.map((image) => image.attributes)
              : ""
          }
          setArchives({galleryUrl : achiveList.gallery[0].url});
          console.log(archives)
        })
  
        .catch((error) => {
          console.log(error);
        });
    }, []);



    function handleChange(){
        
    }
 


    return(
        <RootLayout>
                    <Header/>
                    {
             <div className="col-lg-12 col-xs-12 archive-banner d-flex flex-column justify-content-center align-items-center" style={{background:`url(${baseURLImage+archives.galleryUrl})`,height:'200px'}}>
           
             </div>
}
             
             <div className="col-xs-12 col-lg-12 mt-2 mb-2">
                
         <BasicTabs/>

             </div>
    </RootLayout>        
    )
}