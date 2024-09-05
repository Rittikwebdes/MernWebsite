

function Cards({ item }) {
  return (
   <>
    <div className="mt-10 my-3">
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img
      src={item.image}
      alt="image" className="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-accent">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-accent duration-200 hover:text-black">${item.price} </div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-accent duration-200 hover:text-black">Buy Now</div>
    </div>
  </div>
</div>
    </div>
   </>
  )
}

export default Cards
