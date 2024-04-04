import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import strapi, { baseURLImage } from '@/axios';
import QueryString from 'qs';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function SliderCarousel(props)
{
    const getLoader = useSelector((state) => state.menuRreducer.isLoader);

   
    const [sliderList , setSlider] = useState([])

    useEffect(() => {
        strapi
          .get(
            "/sliders?populate=*" +
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
    
            const sliderList = data.map((item) => ({
              id: item.id,
              sliderName: item.attributes.sliderName,
              sliderLink : item.attributes.sliderLink,
              gallery:
              item.attributes.gallery.data !== null
                ? item.attributes.gallery.data.map((image) => image.attributes)
                : "",
            }));
    
            setSlider(sliderList);
          })
    
          .catch((error) => {
            console.log(error);
          });
      }, [getLoader]);
    
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <Carousel>
            {
                sliderList.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}



function Item(props)
{ 
    return (
        <Paper>
        <Link href={props.item.sliderLink}>
       <div> <img src={baseURLImage+props.item.gallery[0].url}  width={'100%'} height={'200px'}/></div>
       </Link>
        </Paper>
    )
}