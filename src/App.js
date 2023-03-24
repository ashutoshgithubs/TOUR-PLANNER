import React, {useState} from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTours(newTour);
  }
  

  if(tours.length===0){
    return (
      <div className="h-[100vh] flex flex-col justify-center items-center gap-y-2">
        <img src={require('./image/rahul-gandhi.gif')} alt="logo" className="w-56 aspect-square rounded-lg object-contain"></img>
        <h1 className="text-2xl text-black font-bold">No Tour Left</h1>
        <button className="bg-white text-black transition-all duration-500 border border-black rounded-md px-20 py-2 hover:bg-black hover:text-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );

  }
  return(
    
      <Tours tours={tours} removeTour={removeTour}></Tours>
    
  );
};

export default App;
