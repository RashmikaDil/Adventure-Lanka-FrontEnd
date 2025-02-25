
import Map from './components/Map';
import './index.css'
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/footer';
import Search from './components/Search';
import About from './components/about';


function Home(){
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth', 
    });
  };

    return(<>
     <Header ></Header>
    <div className="w-full h-screen m-0 sm:h-[100vb]   sm:flex  block text-gray-300 ">
      
      <div className=' sm:z-0 hidden  sm:block  z-0  h-[500px] w-full'>       
        <h1>
 <Map ></Map>
        </h1>
        
        </div>

<div className='z-10 w-full sm:h-[100vb] h-[100vb] transition-all   right-0 sm:w-[50%] sm:absolute bg-gradient-to-t from-gray-950 to-gray-950   sm:rounded-tl-[500px] flex flex-col justify-center text-center items-center'>
<a className='text-5xl font-bold mb-8' href='/' >Adventure Lanka</a>     
<h1 className='text-xl font-bold'>
Find Adventure !
</h1>
<p className='mb-6'>Find Your Favorite Things to Do in Sri Lanka</p>
<button onClick={handleScroll}  className='w-[230px] px-4 py-3 border-0 rounded-[15px] transition-all duration-500 bg-gray-200 text-gray-900 cursor-pointer  hover:bg-gray-900 hover:text-gray-200  ' >
    FIND 
</button>



      </div>


    </div>
    
   
   


 
  <Item category="any" num="4"></Item>
  <Search></Search>
  <About></About>

<Footer></Footer>
    
    </>)

}
export default Home;