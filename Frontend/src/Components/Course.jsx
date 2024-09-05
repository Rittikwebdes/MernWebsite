import { Link } from "react-router-dom"

import { useEffect, useState } from "react";
import axios from "axios"
import {URL} from "../API"

function Course() {
  const [course,setCourse]=useState([])
useEffect(()=>{
const newData = async ()=>{
try {
  const res = await axios.get(`${URL}/course`)
  console.log(res.data)
  setCourse(res.data)
} catch (error) {
  console.log("error:",error)
}
}
newData();
},[])

 const Data = course.filter((val)=>val.category==="paid")
 console.log(Data)
  return (
  <>
<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
<div className="mt-28 items-center justify-center text-center">
<h2 className="text-2xl md:text-4xl">We are delighted to have you <span className="text-accent">here :)</span> </h2>
<p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in iste libero consequatur vero itaque enim ipsam sit corrupti soluta nobis accusamus ut officia reiciendis quas explicabo expedita non, totam id! Quibusdam, ad officiis. Velit magnam repellat ipsam atque soluta.</p>
<button className="btn btn-accent mt-10"><Link to="/">Back</Link></button>
</div>
<div className="mt-6 flex flex-wrap gap-4 md:justify-center">
{
Data.map((item)=>{
  return(
    <>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-accent">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-accent duration-200 hover:text-black">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-accent duration-200 hover:text-black">Buy Now</div>
    </div>
  </div>
</div>
    </>
  )
})
}
</div>
</div>
  </>
  )
}

export default Course
