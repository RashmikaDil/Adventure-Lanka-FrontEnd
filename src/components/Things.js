import { faLocationDot, faMedal, faThumbsDown, faThumbsUp, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Things({data}){
    
    return (
        <div className=" flex   bg-red-700 h-32 m-2 shadow-md rounded-md overflow-hidden ">
            <div className="w-36 h-32 bg-black ">
                <img className="object-cover w-full h-full "
                src={data.imag} alt={data.Activity} 
                >
                
                
                </img>
            </div>
            <div className="w-full h-[1fr] bg-gray-200 cursor-pointer">
                <h1 className="text-md font-bold pl-2 pt-1 text-[#091e2b]">{data.Activity}</h1>
                <h1 className="pl-2 text-xs italic text-[#15425e] ">{data.category}</h1>
                <h1 className=" pl-2 text-[#15425e]  ">
                    <div className="flex items-center text-sm">
                    <FontAwesomeIcon icon={faLocationDot} className="pr-2"></FontAwesomeIcon>
                     {data.Location}</div></h1>
                <div className="flex pl-2 ">
                    <h1 className="text-xs"> From {data.S_location} To {data.e_location}</h1>
                 
                </div>
                
            </div>
            <div className="w-32 h-32 bg-[#2cd1c3]  flex flex-col justify-center items-center">
                <h1><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></h1>
                <h1 className="text-2xl">{data.score}</h1>
                <div className="flex cursor-pointer  ">
<FontAwesomeIcon icon={faThumbsUp} className="p-2 w-1/2 bg-blue-700 text-white "></FontAwesomeIcon>
<FontAwesomeIcon icon={faThumbsDown} className="p-2 w-1/2 bg-red-700 text-white "></FontAwesomeIcon>

                </div>
                <div className="flex cursor-pointer  ">
            <h1 className="text-xs w-1/2 p-2 pt-0 text-center">221</h1>
            <h1 className="text-xs w-1/2 p-2 pt-0 text-center">1</h1>


                </div>
            </div>
        </div>
    )
}

export default Things;