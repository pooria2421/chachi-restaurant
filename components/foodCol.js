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
        <div className="col-xs-12 col-lg-12 food-col d-flex mt-2 mb-2 p-2" style={{paddingLeft:'14px' , paddingRight:'14px',justifyContent:'space-between'}}>
            <div className="col-xs-5 col-lg-5" style={{display:'flex' , flexDirection:'column' , justifyContent:'space-around'}}>
          <div className="">
            <div className="food-col-title">{productName}</div>
            <div className="food-col-description">{productDescription}</div>
            </div>
            <div className="">
            <Rating name="disabled" value={productStar} disabled />
             </div>
            </div>
            <div className="col-7 d-flex" style={{justifyContent:'space-between'}}>
                
          <div className="col-5" style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <div className="food-col-price d-flex justify-content-between"><span style={{fontWeight:'bolder',borderRadius:'10px' , fontSize:'11px'}}>{toRial(productPrice.toString())}</span> <span className="d-flex align-items-center" style={{fontSize:'11px'}}>تومان</span></div>
            <div className="d-flex justify-content-between align-items-center mt-2">
            <span style={{fontSize:'12px'}}>سفارش</span>
            <span><img src="/assets/images/phoneRed.png" width={'12'}/></span>
            </div>
            </div>

            <div className="food-col-image col-6" style={{background:`url(${baseURLImage+gallery[0].url})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}} ></div>

            </div> 
        </div>
    )
}