import { baseURLImage } from "@/axios";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function FoodCol({productName,productPrice,productDescription,productStar , gallery}){
    const [value, setValue] = useState(2);
    function toRial(str) {
      str = str.replace(/\,/g, "");
      var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
      while (objRegex.test(str)) {
        str = str.replace(objRegex, "$1,$2");
      }
      return str;
    }
    return (
        <div className="col-12 food-col d-flex mt-2 mb-2 p-2" style={{paddingLeft:'14px' , paddingRight:'14px',justifyContent:'space-between',borderBottom:'0.5px solid #eee'}}>
            <div className="col-7 mb-2" style={{display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
          <div className="">
            <div className="food-col-title">{productName}</div>
            <div className="food-col-description">{productDescription}</div>
            </div>
            <div className="">
            <div className="col-6" style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <div className="food-col-price d-flex" style={{padding:'0px !important'}}><span style={{fontWeight:'bolder',borderRadius:'10px' , fontSize:'15px',fontWeight:'bolder'}}>{toRial(productPrice.toString())}</span> <span className="d-flex align-items-center" style={{fontSize:'11px',color:'#fff',paddingRight:'3px',paddingLeft:'0px'}}>{productPrice == "" ? '---' : 'تومان'}</span></div>
          
            </div>
            {/* <Rating name="disabled" value={productStar} disabled /> */}
             </div>
            </div>
            <div className="col-5 d-flex" style={{justifyContent:'end'}}>
                
     
{
            <div className="food-col-image col-12" style={{background:`url(${baseURLImage+gallery[0] == "" || gallery[0] == undefined ? '' : baseURLImage+gallery[0].url})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}} ></div>

            // <div className="food-col-image col-6" style={{background:`url(${baseURLImage+gallery[0].url})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}} ></div>
}
            </div> 

        </div>
    )
}