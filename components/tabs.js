import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FoodCol from './foodCol';
import { useEffect } from 'react';
import strapi from '@/axios';
import { useState } from 'react';
import QueryString from 'qs';
import { useRouter } from 'next/router';
import { IS_LOADER } from '@/redux/actions';
import { useDispatch } from 'react-redux';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);
  const [list, setList] = useState([]);
  const router = useRouter();
  const [archiveName , setArchive] = useState()


  useEffect(() => {

 setArchive(router.query.index)

  },[router.query])

  function getProduct(url){
    strapi
    .get(url)
    .then((response) => {
      dispatch({ type: IS_LOADER, payload: false });


      const data = response.data.data;
      const productList = data.map((item) => ({
        productName: item.attributes.productName,
        productId: item.id,
        productPrice: item.attributes.productPrice,
        productDescription : item.attributes.productDescription,
        productStar : item.attributes.productStar,
        gallery:
          item.attributes.gallery.data !== null
            ? item.attributes.gallery.data.map((image) => image.attributes)
            : "",
      }));
console.log(productList)
      setList(productList);
    })

    .catch((error) => {
      dispatch({ type: IS_LOADER, payload: false });

      setList([{}]);
      console.log(error);
    });

  }

  const dispatch = useDispatch();

  const handleChange = (event, newValue,value) => {   

    dispatch({ type: IS_LOADER, payload: true });
    setArchive(newValue)
    console.log(newValue)
    setValue(newValue)
    const generateLink =
    "/products?populate=*&" +
    QueryString.stringify(
      {
        filters: {
          archives: {
            archiveName: newValue
           
          },
  
          // productPrice : {
          //     min :'0',
          //     max : productPrice

          // }
        },
      },
      { encode: false }
    );

  getProduct(generateLink);
  }; 



  useEffect(() => {


      const generateLink =
        "/products?populate=*&" +
        QueryString.stringify(
          {
            filters: {
              archives: {
                archiveName: router.query.index
               
              },
      
          
            },
          },
          { encode: false }
        );
  if(router.query.index == undefined){}
  else{
      getProduct(generateLink);
  }
  },[router.query])


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
        }));

        setArchives(achiveList);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [router.query]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
          scrollButtons
          allowScrollButtonsMobile
        onChange={handleChange} aria-label="basic tabs example" style={{direction:'rtl'}}>
        
        {
archives.map((element)=>(
         <Tab label={element.archiveName} {...a11yProps(element.id)}  value={element.archiveName}/>
         ))

        }

        </Tabs>
      </Box>
      <div className="col-12 mt-3 mb-3 pr-2 pl-2" style={{textAlign:'right'}}>
  <div className="col-4 pb-1 mr-2 ml-2 pr-2 pl-2" style={{borderBottom:'2px solid red',float:'right',marginBottom:'20px'}}> {archiveName}</div>
    </div>
{

  list.map(element=>(

      <FoodCol productName={element.productName} productPrice={element.productPrice == null ? '' : element.productPrice} productDescription={element.productDescription} productStar={element.productStar} gallery={element.gallery}/>
        ))
        
}
 
    </Box>
  );
}