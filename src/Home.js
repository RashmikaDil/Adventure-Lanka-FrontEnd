
import Map from './components/Map';
import './index.css'
function Home(){
    return(<>
    <div className="w-full h-screen m-0 sm:h-[100vb]   md:flex  block text-[#02476e] ">
      
      <div className=' sm:z-0 hidden  md:block  z-0  h-[500px] w-full'>       
        <h1>
 <Map ></Map>
        </h1>
        
        </div>

<div className='z-10 w-full md:h-[100vb] h-[100vb] transition-all   right-0 md:w-[50%] md:absolute  bg-gradient-to-b from-[#b5f08e] to-[#00f0e4] md:rounded-tl-[500px] flex flex-col justify-center items-center'>
<a className='text-5xl font-bold mb-8' href='/' >Adventure Lanka</a>     
<h1 className='text-xl font-bold'>
Find Adventure !
</h1>
<p className='mb-6'>Find Your Favorite Things to Do in Sri Lanka</p>
<button className='w-[230px] px-4 py-3 border-0 rounded-[15px] transition-all duration-500 bg-[#02476e] text-white cursor-pointer drop-shadow-[0_1px_10px_rgba(2,71,110,1)]  hover:drop-shadow-[0_5px_12px_rgba(2,71,110,1)]' >
    FIND
</button>



      </div>


    </div>
    
    
    
    </>)

}
export default Home;