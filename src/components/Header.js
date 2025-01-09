import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";

function Header({f}) {
  const [visibility, setVisibility] = useState(0);
  const setNavigation = useNavigate();
  
  function navAuth(){
      setNavigation("./profile");
      if(f==="view"){
        setNavigation("../profile");
      }
  }

  function toggleVisibility() {
    setVisibility((prevVisibility) => (prevVisibility === 1 ? 0 : 1));
  }

  return (
    <>
    <div className="text-gray-200 sticky top-0 bg-gray-900 drop-shadow flex z-20 h-[auto] justify-between">
        <div className="pl-3 p-2">
          <a href="/" className="font-semibold">Adventure Lanka</a>
        </div>

     {/*
        <ul
          className={`md:flex  md:pr-0 h-auto absolute md:static mt-10 md:mt-0 md:w-auto w-full md:bg-transparent bg-gray-900 top-0 ${
            visibility === 1 ? "block" : "hidden"
          }`}
        >
          <li className="transition-all md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-gray-700 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="transition-all md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-gray700 cursor-pointer">
            <a href="/">About</a>
          </li>
          <li className="transition-all md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-gray-700 cursor-pointer">
            <a href="/">Services</a>
          </li>
          <li className="transition-all md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-gray-700 cursor-pointer">
            <a href="/">Contact</a>
          </li>
        </ul>/*/}
        <div className="flex items-center mr-4  cursor-pointer">
          <FontAwesomeIcon icon={faUser} onClick={navAuth}></FontAwesomeIcon>
        </div>

        <div className="cursor-pointer hidden p-2" onClick={toggleVisibility}>
          <FontAwesomeIcon className="mr-5" icon={faBars}></FontAwesomeIcon>
        </div>
  </div>
    </>
  );
}

export default Header;