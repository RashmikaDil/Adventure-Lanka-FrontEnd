import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Register(){
    return(<>
   
            <form className="p-10 pb-4 flex flex-col">
                <h1 className="text-3xl mb-8 font-bold text-center text-[#02476e] ">Register</h1>
                <input type="text" className=" m-2 p-2 border-[#02476e] text-[#02476e] border-2 rounded-md " placeholder="Username"></input>
                <input type="email" className="m-2 p-2 border-[#02476e] text-[#02476e] border-2 rounded-md"placeholder="Email Address"></input>
                <input type="password" className="m-2 p-2 border-[#02476e] text-[#02476e] border-2 rounded-md"placeholder="Password"></input>
                <input type="submit" className="m-2 p-2 cursor-pointer     text-white    rounded-md bg-[#02476e]"></input>
              
            </form>
           
 
  
    </>)
};
function Login(){
    return(<>
   
            
            <form className="p-10 pb-4 flex flex-col">
                <h1 className="text-3xl mb-2 font-bold text-center text-[#02476e] ">Login</h1>
                
                <input type="email" className="m-2 p-2 border-[#02476e] text-[#02476e] border-2 rounded-md"placeholder="Email Address"></input>
                <input type="password" className="m-2 p-2 border-[#02476e] text-[#02476e] border-2 rounded-md"placeholder="Password"></input>
                <input type="submit" className="m-2 p-2 cursor-pointer     text-white    rounded-md bg-[#02476e]"></input>
                
            </form>
           

    
    </>)
};

function Profile({username,email}){

    return(<>

     <h1 className="text-3xl mb-2 font-bold text-center text-[#02476e] mt-5 "><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h1>
     <h1 className="text-2xl mb-2 font-bold text-center text-[#02476e] mt-2 ">{username}</h1>
     <h1 className="text-md mb-2  text-center text-[#02476e] mt-2 ">{email}</h1>

     <button classname="bg-red-700">Log Out</button>

    
    </>)
};



function Auth(){
    const [visibile , setVisibile] = useState(2);
    return(<>
     
     <div className=" w-full h-screen max-h-screen flex flex-col justify-center bg-gradient-to-b from-[#8ef0ab] to-[#00f0e4] items-center ">
     <div className=" transition-all   md:w-[400px] w-full md:h-auto h-full shadow-xl bg-white rounded-xl " >
 
     
{visibile === 0 && <Register></Register>}
{visibile === 1 && <Login></Login>}
{visibile === 2 && <Profile username="Rashmika " email="rashmikadil2023@gmail.com"></Profile>}

<div className="flex flex-col justify-center items-center mb-10 transition-all">
<div onClick={() => setVisibile(0)} className={`w-1/2 flex justify-center items-center text-[#02476e] cursor-pointer  ${visibile===0?  "hidden " : visibile===2? "hidden" :"block"}`}>Don't have a account !</div>
 <div onClick={() => setVisibile(1)}  className={`w-1/2 flex justify-center items-center text-[#02476e]  cursor-pointer ${visibile===1?  "hidden " : visibile===2? "hidden" :"block"}`}> Already have a account ?</div>
 </div>
</div>


    </div>
    </>);
}
export default Auth;