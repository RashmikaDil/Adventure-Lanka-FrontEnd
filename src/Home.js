
import Map from './components/Map';
import './index.css'
import Header from './components/Header';
import DestinationList from './DestinationList';
import TitleHeader from './components/TitleHeader';

function Home(){
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth', 
    });
  };

    return(<>
     <Header ></Header>
    <div className="w-full h-screen m-0 sm:h-[100vb]   sm:flex  block text-[#80cefc] ">
      
      <div className=' sm:z-0 hidden  sm:block  z-0  h-[500px] w-full'>       
        <h1>
 <Map ></Map>
        </h1>
        
        </div>

<div className='z-10 w-full sm:h-[100vb] h-[100vb] transition-all   right-0 sm:w-[50%] sm:absolute bg-gradient-to-t from-[#0f2636] to-[#07679e]   sm:rounded-tl-[500px] flex flex-col justify-center text-center items-center'>
<a className='text-5xl font-bold mb-8' href='/' >Adventure Lanka</a>     
<h1 className='text-xl font-bold'>
Find Adventure !
</h1>
<p className='mb-6'>Find Your Favorite Things to Do in Sri Lanka</p>
<button onClick={handleScroll}  className='w-[230px] px-4 py-3 border-0 rounded-[15px] transition-all duration-500 bg-[#80cefc] text-[#02476e] cursor-pointer drop-shadow-[0_1px_10px_rgba(2,71,110,1)] hover:bg-[#02476e] hover:text-[#80cefc]  hover:drop-shadow-[0_5px_12px_rgba(2,71,110,1)]' >
    FIND 
</button>



      </div>


    </div>
    
   
   

  <TitleHeader title="Top Adventures" i="trophy"></TitleHeader>
  <DestinationList set="top5"   />

    
    </>)

}
export default Home;