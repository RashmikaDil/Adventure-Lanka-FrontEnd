import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
function Search() {
  const ApiUrl = process.env.REACT_APP_API_URL;
  const [destination, setDestination] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [num, setNum] = useState(4);


  function loadMore(){
    setNum(num + 4);
  }

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(`${ApiUrl}api/destinations`);
        setDestination(response.data);
        setFilteredData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching destination data:", error);
      }
    };

    fetchDestination();
  }, [ApiUrl]);

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = destination.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        (item.description && item.description.toLowerCase().includes(searchTerm))
    );
    setFilteredData(filtered);
  };
  if (filteredData.length === 0){
    
  }

  return (
    <div>
      <div className="p-4  m-10 flex flex-col justify-center items-center" >
      <label htmlFor="search" className="mb-4 font-bold text-2xl">Search Anything...</label>
     
      <input
      className="p-4 md:w-[300px] w-[95%] border-[1px] rounded-md"
        id="search"
        type="text"
        placeholder="Type to search by name, category, or location..."
        value={search}
        onChange={handleChange}
      /> </div>
      <ItemCard destination={filteredData} num={num}></ItemCard>
      <div className="p-10 flex justify-center items-center">
      {filteredData.length > 0  && <button className="shadow-md p-2 rounded-md border-[1px] bg-white" onClick={loadMore}>Load More</button>}
     
      </div>
    </div>
  );
}

export default Search;
