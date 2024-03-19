import React, { useState } from "react";
import Card from "./Card";
function Testimonial(props){
    const reviews=props.reviews;
    const [i,setI]=useState(0)
    let n=reviews.length-1
    function leftShiftHandler(){
        if(i>0){
            setI(i-1)
        }
        else{
            setI(n)
        }

    }
    function rightShiftHandler(){
        if(i<n){
            setI(i+1)
        }
        else{
            setI(0)
        }
    }
    console.log(i)
    function surpriseHandler(){
        let m=Math.floor(Math.random()*(n+1));  //Number between a and b a+Math.random()*(b-a)
        setI(m)
    }
    return(
        <div className="flex flex-col items-center">
            <Card review={reviews[i]}></Card>
            <div className="flex gap-4">
                <button onClick={leftShiftHandler}>
                    -
                </button>
                <button onClick={rightShiftHandler}>
                    +
                </button>
            </div>
            <div>
                <button onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial;