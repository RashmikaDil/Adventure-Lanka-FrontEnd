
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapLocationDot,  } from "@fortawesome/free-solid-svg-icons";

function MapCard({destination}) {

    const position = [7.8, 80.5];
    const zoom = 7;

const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", 
    iconSize: [25, 41],
    iconAnchor: [12.5, 41], 
    popupAnchor: [0, -41], 
  });

    const dest = destination;
    const lat = parseFloat(dest.coordinates.split(',')[0].split('°')[0].trim());
    const lng = parseFloat(dest.coordinates.split(',')[1].split('°')[0].trim());
    const cordinate = [lat, lng] ;

    return (
        <div className=" h-[500px] w-full">
            
        <MapContainer center={position} zoom={zoom} className="h-[500px] w-full">
        <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
/>

  
         
            <Marker  position={cordinate} icon={markerIcon}>
              <Popup className="w-[300px]">
      <div className=" bg-white rounded-lg ">
        <img
          src={dest.imag}
          alt="Location"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h1 className="font-semibold text-lg mt-3 text-gray-900 flex items-center justify-center">
          <FontAwesomeIcon icon={faMapLocationDot} className="mr-2 text-blue-600" />
          {dest.name}
        </h1>
        <h2 className="text-sm italic text-gray-500 py-1 px-2 rounded-md bg-yellow-100 mt-2 inline-block">
          {dest.category}
        </h2>
        <p className="mt-3 text-gray-600 text-sm">
          {dest.description || "Explore this amazing destination!"}
        </p>
      </div>
    </Popup>
  
            </Marker>
        
        </MapContainer>
      </div>
      );

}

export default MapCard;