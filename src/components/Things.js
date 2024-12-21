function Things({data}){
    
    return (
        <div className=" flex w-screen bg-red-700 h-32 m-2">
            <div className="w-36 h-32 bg-black">
                <img className="object-cover w-full h-full"
                src={data.imag} alt="lll" 
                >
                
                
                </img>
            </div>
            <div className="w-full h-[1fr] bg-gray-200">
                <h1 className="text-black text-2xl pl-2">{data.Activity}</h1>
                <h1 className="text-black pl-2 ">{data.category}</h1>
                <h1 className="text-black pl-2 ">{data.Location}</h1>
                <div className="flex pl-2">
                    <h1> From {data.S_location} To {data.e_location}</h1>
                 
                </div>
                
            </div>
            <div className="w-32 h-32 bg-red-300 flex flex-col justify-center items-center">
                <h1>Score</h1>
                <h1 className="text-2xl">{data.score}</h1>
            </div>
        </div>
    )
}

export default Things;