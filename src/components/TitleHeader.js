

import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TitleHeader({ title,links,linkTxt,i} ){

       return(
        <>
        
        <div className="flex justify-between pl-10 p-4 bg-[#02476e] text-[#80cefc]">
            <h1 className="text-2xl" >
               { i === "trophy"  && <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon> } {title}
            </h1>
 
        </div>
        </>
       )
}
export default TitleHeader;