
import Footer from "./Footer";
import Navbar from "./Navbar";

function Review() {


  return (
    <>
      <Navbar />
      <div className=" max-w-screen container mx-auto md:px-20 px-4 py-5">
        <h1 className="text-4xl mt-[80px] text-center">
          Our <span className="text-accent">Networks</span>
        </h1>
        <div className=" mt-6 flex  flex-col ml-[100px]  md:flex-row gap-5 md:ml-[100px]">
          <div className="w-full md:w-1/2 mt-12 md:mt-26">
            <img src="Main.jpg" className="w-[160px] rounded-full" alt="" />
            <h1 className="text-2xl ml-5">Alex Carry</h1>
         
            <h2 className="ml-4 md:ml-10">&#9734; &#9734; &#9734; &#9734; &#9734;</h2>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-26">
            <img src="Main.jpg" className="w-[160px] rounded-full" alt="" />
            <h1 className="text-2xl ml-5">Alex Carry</h1>
       
            <h2 className="ml-4 md:ml-10">&#9734; &#9734; &#9734; &#9734; &#9734;</h2>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-26">
            <img src="Main.jpg" className="w-[160px] rounded-full" alt="" />
            <h1 className="text-2xl ml-5">Alex Carry</h1>
         
            <h2 className="ml-4 md:ml-10">&#9734; &#9734; &#9734; &#9734; &#9734;</h2>
          </div>
        </div>
        <div className=" my-9 p-5 shadow-lg w-full mx-auto text-center">
        <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-accent" />
</div> <br />
<button type="Submit" className="mt-3 bg-accent p-2 rounded-md text-black font-bold">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Review;
