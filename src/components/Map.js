import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

function Map() {

  const position = [7.8, 82.3];
  const zoom = 8;

 
  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", // Default marker icon
    iconSize: [25, 41], // Adjusted size of the marker
    iconAnchor: [12.5, 41], // Center horizontally and anchor to bottom
    popupAnchor: [0, -41], // Position the popup above the marker
  });

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
 
    fetch("https://back-end-little-bird-9008.fly.dev/api/destinations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
       
        const parsedData = data.map((destination) => {
          const [lat, lng] = destination.coordinates.split(",").map(Number);
          return { ...destination, coordinates: [lat, lng] };
        });
        setDestinations(parsedData);
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  return (
    <div className="map-container" style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
      
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
        />

        {destinations.map((destination, index) => (
          <Marker
            key={index}
            position={destination.coordinates} 
            icon={markerIcon}
          >
            <Popup>
              <h1>{destination.name}</h1>
              <p>{destination.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
