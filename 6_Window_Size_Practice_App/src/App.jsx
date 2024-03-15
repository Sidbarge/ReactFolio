import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const[windowSize,setWindowSize]=useState({
    width:window.innerWidth,
    height:window.innerHeight
  })
  useEffect(()=>{
    const resizeHandler=()=>{
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }
    // Add event listener
    window.addEventListener('resize',resizeHandler)

    return ()=>{
      //remove event listener
      window.removeEventListener('resize',resizeHandler)
    }
  })
  return (
    <div className="flex flex-col justify-center items-center h-[96vh] box-border ">
      <span>Window Width:{windowSize.width}</span>
      <span>Window height:{windowSize.height}</span>
    </div>
  );
}

export default App;
