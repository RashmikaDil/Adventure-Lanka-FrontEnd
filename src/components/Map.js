import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapLocationDot,  } from "@fortawesome/free-solid-svg-icons";

function Map() {

  const position = [7.8, 82.3];
  const zoom = 8;
const apiUrl = process.env.REACT_APP_API_URL;
 
  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", // Default marker icon
    iconSize: [25, 41], // Adjusted size of the marker
    iconAnchor: [12.5, 41], // Center horizontally and anchor to bottom
    popupAnchor: [0, -41], // Position the popup above the marker
  });

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
 
    fetch(`${apiUrl}api/destinations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
       
        const parsedData = data.map((destination) => {
          const lat = parseFloat(destination.coordinates.split(',')[0].split('°')[0].trim());
          const lng = parseFloat(destination.coordinates.split(',')[1].split('°')[0].trim());
          return { ...destination, coordinates: [lat, lng] };
        });
        setDestinations(parsedData);
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  }, [apiUrl]);

  


  return (
    <div className="map-container h-screen w-full">
    <MapContainer center={position} zoom={zoom} className="h-full w-full">
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
      />

      {destinations.map((destination, index) => (
        <Marker key={index} position={destination.coordinates} icon={markerIcon}>
          <Popup className="w-[300px]">
  <div className=" bg-white rounded-lg ">
    <img
      src={destination.imag}
      alt="Location"
      className="w-full h-40 object-cover rounded-lg"
    />
    <h1 className="font-semibold text-lg mt-3 text-gray-900 flex items-center justify-center">
      <FontAwesomeIcon icon={faMapLocationDot} className="mr-2 text-blue-600" />
      {destination.name}
    </h1>
    <h2 className="text-sm italic text-gray-500 py-1 px-2 rounded-md bg-yellow-100 mt-2 inline-block">
      {destination.category}
    </h2>
    <p className="mt-3 text-gray-600 text-sm">
      {destination.description || "Explore this amazing destination!"}
    </p>
  </div>
</Popup>

        </Marker>
      ))}
    </MapContainer>
  </div>
  );
}

export default Map;
