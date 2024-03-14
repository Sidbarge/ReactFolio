import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";
function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  
  if(tours.length === 0){
    return(
      <div className="refresh flex flex-col justify-center items-center w-[98vw] h-[90vh] box-border">
        <h2 className="font-bold font-sans">No Tour Left</h2>
        <button className="border-none w-44 h-10 cursor-pointer" onClick={()=>setTours(data)}>
           Refresh
        </button>
      </div>
    ) 
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
