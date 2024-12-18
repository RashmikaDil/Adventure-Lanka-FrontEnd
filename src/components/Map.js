import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapData from "./Mapdata";
import L from 'leaflet';

function Map (){
    const position = [7.8, 82.3 ];; 
    const zoom = 8; 
    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Default marker icon
        iconSize: [15, 25], // Set size of the marker
        iconAnchor: [15, 41], // Anchor the icon to the bottom center
        popupAnchor: [0, -41], // Position the popup above the marker
      });
    return(
<>
<div className="map-container">
      <MapContainer center={position} zoom={zoom} style={{ height: "100vb", width: "100%" }}>
        
      <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
        />

        {MapData.map((MapData)=>{
            return(<Marker position={MapData.coordinates} icon={markerIcon}>
                <Popup>
                    <h1>{MapData.name}</h1>
                    
                    {MapData.description}


                </Popup>
              </Marker>)
        })}

      </MapContainer>
    </div>
</>)
}
export default Map;