import React from "react";

function Card(props){
    let review=props.review;
    return(
        <div className="flex flex-col items-center gap-4">
            <div>
                <img src={review.image} width="300px" alt="img" />
            </div>
            <div>
                <p>{review.name}</p>
            </div>
            <div>
                <p>{review.job}</p>
            </div>
            <div>
                Icon
            </div>
            <div>
                {review.text}
            </div>
            <div>
                Icon
            </div>
        </div>
    )
}
export default Card;