import { useState } from "react";

function Card({id, name, info, image, price,removeTour}) {
    // const description = `${info.substring(0, 200)}....`
    const [description,setDescription]=useState(`${info.substring(0, 200)}....`)
    const [readmore, setReadmore] = useState(false)

    function readmoreHandler() {
        setReadmore(!readmore);
        if(!readmore){
            setDescription(info)
        }
        else{
            setDescription(`${info.substring(0, 200)}....`)
        }
    }

    
    return (
        <div className="card max-w-[380px] max-h-[600px] h-max p-4 flex flex-col items-center justify-between rounded-lg shadow-slate-500 shadow-sm">
            <img className="w-[100%] h-[300px]" src={image} alt="" />

            <div className="info">
                <div className="tour-detail h-[40%]">
                    <div className="tour-price">
                        <h4 className="text-xl font-sans text-green-600 my-2">{price}</h4>
                    </div>
                    <div className="tour-name">
                        <h4 className="text-2xl m-0 font-sans">{name}</h4>
                    </div>
                </div>

                <div className="description font-sans font-[400]">
                    {description}
                    <span className="read-more text-blue-500 cursor-pointer" onClick={readmoreHandler}>
                        {readmore ? 'Show less' : 'Read more'}
                    </span>
                </div>
            </div>

            <button className="btn-red hover:bg-red-500 hover:text-white border border-red-600 bg-red-200 cursor-pointer w-[250px] h-[40px] rounded-md my-3 text-[20px] font-bold" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;