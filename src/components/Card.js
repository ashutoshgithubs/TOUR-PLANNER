import {useState} from "react";

function Card({id,name,info,image,price,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        //Let's create a card using the fetched details
        <div className="card w-96 h-full m-1 gap-4 p-2 flex flex-col rounded-lg items-center shadow-lg  shadow-black hover:transition-all hover:duration-500 transform 
        transition duration-500 hover:scale-105">
            <img src={image} className="w-90 aspect-square object-cover"></img>
            <div className="datails mx-4 my-1">
                <div className="price-name ">
                    <h1 className="tour-price text-[#1faa59] text-xl font-bold">&#8377;{price}</h1>
                    <h1 className="tour-name text-xl font-bold text-black">{name}</h1>
                </div>
                <div className="tour-info">
                    {description}
                    <span className="read-more cursor-pointer text-[#12b0e8]" onClick={readmoreHandler}>
                        {readmore?` Show Less`:`Show More`};
                    </span>
                </div>
            </div>
            <button className="btn mt-5 px-20 py-2 border rounded-md border-red-800 bg-[#b4161b21] hover:bg-red-500 hover:text-white transition-all duration-500 font-bold" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    );
}
export default Card;