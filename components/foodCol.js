import { Rating } from "@mui/material";
import { useState } from "react";

export default function FoodCol(){
    const [value, setValue] = useState(2);
    return (
        <div className="col-xs-12 col-lg-12 food-col d-flex mt-2 mb-2 p-2" style={{paddingLeft:'14px' , paddingRight:'14px',justifyContent:'space-between'}}>
            <div className="col-xs-6 col-lg-6" style={{display:'flex' , flexDirection:'column' , justifyContent:'space-around'}}>
          <div className="">
            <div className="food-col-title">کوبیده گوسفندی</div>
            <div className="food-col-description">دو سیخ کوبیده + برنج + گوجه</div>
            </div>
            <div className="">
            <Rating name="disabled" value={value} disabled />
             </div>
            </div>
            <div className="col-6 d-flex" style={{justifyContent:'space-between'}}>
                
          <div className="col-5" style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <div className="food-col-price d-flex justify-content-between"><span style={{fontWeight:'bolder',borderRadius:'10px' , fontSize:'11px'}}>240,000</span> <span className="d-flex align-items-center" style={{fontSize:'11px'}}>تومان</span></div>
            <div className="d-flex justify-content-between align-items-center mt-2">
            <span style={{fontSize:'12px'}}>سفارش</span>
            <span><img src="/assets/images/phoneRed.png" width={'12'}/></span>
            </div>
            </div>

            <div className="food-col-image col-6"><img src="/assets/images/archive2.jpg"/></div>

            </div> 
        </div>
    )
}