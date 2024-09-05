import Cards from "./Cards"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios"
import { useState,useEffect } from "react";
import {URL} from "../API"
function Freecource() {
  const [freeCourse,setFreeCourse]=useState([])
  useEffect(()=>{
  const freeData = async ()=>{
  try {

    const resp = await axios.get(`${URL}/course`)

    
    console.log(resp.data)
    setFreeCourse(resp.data)
  } catch (error) {
    console.log("error:",error)
  }
  }
  freeData();
  },[])
  
const filterData = freeCourse.filter((items)=>items.category==="free")


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
  <div>
  <h2 className="text-2xl font-semibold">Free Offered Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident
          dignissimos ad mollitia magni non? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Repellendus, voluptas?
        </p>
  </div>
   
      <div>
        <Slider {...settings}>
          {
            filterData.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
          }
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Freecource;
