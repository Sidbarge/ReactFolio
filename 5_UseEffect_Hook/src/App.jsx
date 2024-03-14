import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const[text,setText]=useState('')
  const[name,setName]=useState('Sid')
  // Variation-1 On every render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // },)

  // Variation-2 ON first render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // },[])
  
  //Variation-3 -->whenever dependency changes
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // },[name])

  //Variation 4-->To handle unmounting of the component
  useEffect(()=>{
    //add event listener
    console.log("Listener added")

    return ()=>{
      console.log('listener removed')
    }
  },[text])
  function changeHandler(e){
    setText(e.target.value)
    console.log(text)
  }
  return (
    <div className="flex justify-center">
      <input type="text" onChange={changeHandler}/>
    </div>
  );
}

export default App;
