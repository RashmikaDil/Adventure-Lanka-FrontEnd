import Things from "./Things";
import T_data from "./T_data";

function Step1(){
    const topActivities = T_data.sort((a, b) => b.score - a.score).slice(0, 5);
return(
    <>
<div className="w-full md:h-auto bg-teal-500 sm:flex block h-auto">
<div className="sm:w-2/5 w-full bg-teal-100  flex justify-center items-center text-4xl p-8 text-teal-800">
<h1>

    Best Things To Do In<p className="font-bold text-6xl text-teal-950"> Sri Lanka</p>
</h1>



</div>
<div className="flex flex-col justify-center  w-screen ">

{topActivities.map((T_data)=>{
    return(<>
    
    <Things data={T_data} key={T_data}/>
    
    </>)
})}
</div>
</div>
    
    </>
)



}
export default Step1;