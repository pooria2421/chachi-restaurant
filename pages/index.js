
import { Slider } from "antd";
import RootLayout from "./layout";
import SliderCarousel from "@/components/slider";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import strapi, { baseURLImage } from "@/axios";
import QueryString from "qs";
import { useSelector } from "react-redux";

export default function mainPage(){

  const [archives, setArchives] = useState([]);


  const [banners, setBanner] = useState([]);

  const getLoader = useSelector((state) => state.menuRreducer.isLoader);


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
  }, [getLoader]);





  useEffect(() => {
    strapi
      .get(
        "/banners?populate=*" +
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

        const bannerList = data.map((item) => ({
          id: item.id,
          bannerName: item.attributes.bannerName,
          bannerLink : item.attributes.bannerLink,
          gallery:
          item.attributes.gallery.data !== null
            ? item.attributes.gallery.data.map((image) => image.attributes)
            : "",
        }));

        setBanner(bannerList);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [getLoader]);


    return (
        <RootLayout>    
        <Header/>
         
        <div className="slider">
          <SliderCarousel/>
        
        </div>

        <div className="col-12 text-center mt-3">
        <div className="col-5 m-auto pb-1" style={{borderBottom:'2px solid red'}}>  دسته بندی</div>
          </div>


           <div className="archive d-flex flex-wrap d-flex mt-3">
            {
              archives.map((element=>(

            
           <div className="col-4 archive-image p-3 mt-2">
            <Link href={`/archive/${element.archiveName}`}>
            {
                element.gallery == "" || element.gallery == undefined ? '' :
              <img src={baseURLImage+element.gallery[0].url}></img>
              
}
              </Link>
            <div className="col-12 mt-2" style={{textAlign:'center'}}>{element.archiveName}</div>
           </div>
           
           ))) 
          }
           </div>


          <div className="mt-4 col-12">
           
           {
            banners.map(element=>(

       
            <div className="col-12 mb-2">
            <Link href={element.bannerLink == "" || element.bannerLink == null ? '' : element.bannerLink}>
              {
                element.gallery == "" || element.gallery == undefined ? '' :
              <img src={baseURLImage+element.gallery[0].url} style={{width:'100%'}}></img>
              
}
            </Link>
            </div>
                 )) 
}
          </div>
                


        </RootLayout>
    )
}