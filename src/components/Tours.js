import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div className="container  " >
            <div className="flex justify-center">
                <p className="text-lg md:text-3xl font-bold m-16 border-double  border-4 border-sky-500 px-4 md:px-16 py-4 text-center whitespace-nowrap drop-shadow-lg">Tour Planner: Get the Most Out of Your Trip  &#9992;</p>
             
            </div>
            <div className="cards flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}
export default Tours;
