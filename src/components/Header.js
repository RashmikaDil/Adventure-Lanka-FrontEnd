import { faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header(){
    return(<>
    
    <div className=" text-[#02476e]  sticky top-0 bg-[#5efff7] drop-shadow flex  z-20 h-[5vb] justify-between items-center">
<div className="pl-3">
    <a href="/">LOGO</a>
</div>
<ul className="flex pr-2">
        <li className="mr-3"><a href="/">Home</a></li>
        <li className="mr-3"><a href="/">About</a></li>
        <li className="mr-3"><a href="/">Services</a></li>
        <li className="mr-3"><a href="/">Contact</a></li>
</ul>
<div className="cursor-pointer pl-[50px] ">
   <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    
</div>


    </div>
    
    
    </>)
}
export default Header