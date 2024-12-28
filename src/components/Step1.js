import Things from "./Things";
import T_data from "./T_data";

function Step1(){
    const topActivities = T_data.sort((a, b) => b.score - a.score).slice(0, 5);
return(
    <>
<div className="w-full   md:h-auto bg-[#00f0e4] sm:flex block h-auto  ">
<div className=" sm:w-1/2 w-full bg-teal-50 bg-cover  flex justify-center items-center text-4xl p-8 text-[#02476e]">
<h1>

    Best Things To Do In<p className="font-bold text-6xl text-[#02476e]  "> Sri Lanka</p>

    <button className=" bg-[#02476e] p-2 text-teal-300 mt-4 text-sm w-full hover:bg-[#236c96]">View All</button>
</h1>



</div>
<div className="flex flex-col justify-center  bg-teal-100 sm:w-1/2 w-full  ">

{topActivities.map((T_data,index)=>{
    return(<>
    
    <Things data={T_data} key={index}/>

    </>)
})}
</div>

</div>

    <div>

    </div>
    </>
)



}
export default Step1;