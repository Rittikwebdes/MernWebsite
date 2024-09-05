import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {URL} from "../API"

export default function Contact() {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm();
      const onSubmit =async (data) => {
        const contactInfo ={
      name:data.name,
      email:data.email,
      message:data.message
        }

        await axios.post(`${URL}/user/contact`,contactInfo)

  

        .then((res)=>{
          console.log(res.data)
          if(res.data){
          toast.success("Your message submitted successfully :)")
          }
          
        })
        .catch((err)=>{
          if(err.response){
            toast.error(err.response.data.message)
          }
        })
      }
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-screen-2xl container md:px-20 px-4 flex justify-center mt-[150px] ">
          <div className="border p-5 shadow-lg ">
            <h2 className="text-3xl">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2">
                <label htmlFor="name">Name:</label> <br />
                <input type="text" className="outline-none p-3 bg-transparent border rounded-md" placeholder="Enter Your Name"
                                {...register("name", { required: true })} /> <br />
                                   {errors.name && <span className="text-sm text-red-500">This field is required</span>}

              </div>
              <div className="p-2">
                <label htmlFor="email">Email:</label> <br />
                <input type="email"  className="outline-none p-3 border bg-transparent rounded-md" placeholder="Enter Your email"
                                {...register("email", { required: true })} /> <br />
                                   {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="p-2">
                <label htmlFor="message">Message:</label> <br />
                <textarea  className="outline-none p-3 border rounded-md bg-transparent" placeholder="Enter Your Message" 
                                    {...register("message", { required: true })}
                /> <br />
                   {errors.message && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <button type="submit" className="ml-2 p-2 bg-accent text-black font-bold rounded-md">Submit</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
