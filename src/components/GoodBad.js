

const GoodBad = ({ destination }) => {

  

  
  return (
    <div className="w-full flex justify-center items-center mt-20 cursor-pointer">
      <div className="flex items-center  flex-wrap">
        {destination.mons.map((mons, index) => (
          <div key={index} className="relative flex flex-col items-center mb-4">
    
            <div
              className={`absolute left-1/2 top-0 w-0.5 h-24 transform -translate-x-1/2 -translate-y-[60px] transition-all duration-500 ${mons.status === 'Very Good' ? 'bg-pink-500' : 'hidden'}`}
            >
              <div className="w-full relative flex flex-wrap justify-center">
                <div
                  className={`w-[300px] pl-4 absolute bg-pink-500 text-white text-center rounded-lg shadow-xl ${mons.status === 'Very Good' ? 'block' : 'hidden'}`}
                >
                  {mons.description}
                </div>
              </div>
            </div>

        
            <div
              className={`absolute left-1/2 top-0 w-0.5 h-12 transform -translate-x-1/2 transition-all duration-500 
                ${mons.status === 'Good' ? 'bg-green-500' : 
                mons.status === 'Poor' ? 'bg-red-500' : 
                mons.status === 'Very Good' ? 'bg-pink-500' : 'bg-yellow-500'}`}
            ></div>

        
            <div
              className={`relative w-20 h-4 flex justify-center items-center transition-all duration-300 p-4 shadow-md border-2 border-transparent 
                ${mons.status === 'Good' ? 'bg-green-500 text-white' : 
                mons.status === 'Poor' ? 'bg-red-500 text-white' : 
                mons.status === 'Very Good' ? 'bg-pink-500 text-white' : 
                'bg-yellow-500 text-white'} 
                hover:scale-105 hover:shadow-xl`}
                
            >
              <span  className="text-xs font-semibold">{mons.mons}</span>
            </div>

          
            <div className="mt-2 text-xs text-gray-700 mb-5">{mons.status} </div>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodBad;
