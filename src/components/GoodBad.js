const GoodBad = ({ destination }) => {
  return (
    <div className="w-full flex justify-center items-center mt-20 cursor-pointer ">
      <div className="flex items-center justify-center flex-wrap">
        {destination.mons.map((mons, index) => (
          <div key={index} className="relative flex flex-col items-center mb-8">
          
            <div
              className={`relative w-20 h-8 flex justify-center items-center transition-all duration-300 p-4 shadow-md border-2 border-transparent 
                ${mons.status === 'Good' ? 'bg-emerald-500 text-white ' : 
                mons.status === 'Poor' ? 'bg-rose-600 text-white ' : 
                mons.status === 'Very Good' ? 'bg-blue-500 text-white ' : 
                'bg-yellow-400 text-white'} 
                hover:scale-105 hover:shadow-2xl  group `}
            >
              <span className="text-sm font-semibold">{mons.mons}</span>
           
              <div className={`absolute w-[300px] pl-4  bg-gray-800 text-white text-center rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300  top-[60px] `}>
                {mons.description}
              </div>
            </div>

        

    
            <div className="mt-2 text-sm text-gray-700 font-semibold mb-5">{mons.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodBad;
