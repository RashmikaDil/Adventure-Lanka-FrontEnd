import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [visibility, setVisibility] = useState(0);

  function toggleVisibility() {
    setVisibility((prevVisibility) => (prevVisibility === 1 ? 0 : 1));
  }

  return (
    <>
      <div className="text-[#02476e] sticky top-0 bg-[#5efff7] drop-shadow flex z-20 h-[auto] justify-between">
        <div className="pl-3 p-2">
          <a href="/">LOGO</a>
        </div>

        <ul
          className={`md:flex  md:pr-0 h-auto absolute md:static mt-10 md:mt-0 md:w-auto w-full md:bg-transparent bg-[#99f0f4] top-0 ${
            visibility === 1 ? "block" : "hidden"
          }`}
        >
          <li className="md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-[#00f0e4] cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-[#00f0e4] cursor-pointer">
            <a href="/">About</a>
          </li>
          <li className="md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-[#00f0e4] cursor-pointer">
            <a href="/">Services</a>
          </li>
          <li className="md:mr-3 mr-0 md:mb-0 mb-2 md:p-2 p-4 hover:bg-[#00f0e4] cursor-pointer">
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="cursor-pointer md:hidden p-2" onClick={toggleVisibility}>
          <FontAwesomeIcon className="mr-5" icon={faBars}></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}

export default Header;