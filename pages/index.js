
import { Slider } from "antd";
import RootLayout from "./layout";
import SliderCarousel from "@/components/slider";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import strapi, { baseURLImage } from "@/axios";
import QueryString from "qs";

export default function mainPage(){

  const [archives, setArchives] = useState([]);

  useEffect(() => {
    strapi
      .get(
        "/archives?populate=*" +
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

        const achiveList = data.map((item) => ({
          id: item.id,
          archiveName: item.attributes.archiveName,
          gallery:
          item.attributes.gallery.data !== null
            ? item.attributes.gallery.data.map((image) => image.attributes)
            : "",
        }));

        setArchives(achiveList);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
        <RootLayout>    
        <Header/>
         
        <div className="slider">
          <SliderCarousel/>
        
        </div>


           <div className="archive d-flex d-flex mt-3">
            {
              archives.map((element=>(

            
           <div className="col-xs-4 col-lg-4 archive-image p-3"><Link href={`/archive/${element.archiveName}`}><img src={baseURLImage+element.gallery[0].url}/></Link></div>
           ))) 
          }
           </div>
                


        </RootLayout>
    )
}