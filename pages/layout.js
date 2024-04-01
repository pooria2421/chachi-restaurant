import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RootLayout({ children }) {

  const getLoader = useSelector((state) => state.menuRreducer.isLoader);

  const [loader , setLoader] = useState(false)

  useEffect(() => {

  setLoader(getLoader)
   
  },[getLoader])

 return (
  <div className="p-2 container col-lg-4">
     
     {   
           loader == true ?
        <div className="overly-shadow"></div>
        :''
}

    {
      

      
       <Box sx={{ width: '100%' , marginBottom:'0px' }}>
       { 
       loader == true ?
       <LinearProgress color="error"  style={{position:'absolute',top:'0',width:'100%',left:'0',right:'0'}}/>
       : ''
       }
    </Box>
}
    {children}
  </div>
  )
}
