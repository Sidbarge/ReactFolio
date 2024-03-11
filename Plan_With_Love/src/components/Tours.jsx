import Card from "./Card";

function Tours({tours,removeTour}){
    return(
        <div className="flex flex-col items-center">
            <h2 className="md:text-5xl font-bold font-sans text-center border-dashed max-w-[400px] rounded-md p-2 border-blue-700">Plan With Love</h2>
            <div className="cards flex flex-wrap justify-center gap-6">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;