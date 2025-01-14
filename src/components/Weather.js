import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faTemperatureHigh, faTemperatureLow, faTemperatureThreeQuarters, faWater, faWind } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = ({ destination }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '77100302a88de8b173d810485539eb68';
  const coordinates = destination.coordinates.split(',');
  const lat = parseFloat(coordinates[0]?.split('°')[0]?.trim());
  const lng = parseFloat(coordinates[1]?.split('°')[0]?.trim());

  useEffect(() => {
    const fetchWeatherByCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Unable to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    if (lat && lng) {
      fetchWeatherByCoordinates();
    } else {
      setError('Invalid coordinates provided.');
      setLoading(false);
    }
  }, [lat, lng]);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!weather) return <div>Unable to fetch weather data.</div>;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  return (
    <div className="mt-4  bg-gray-700 text-white p-6 rounded-lg border border-gray-300 shadow-sm  justify-center items-center">
      <div className="md:grid md:grid-cols-2 gap-4 ">
        <div>
          <h3 className="text-lg font-semibold">
           LIVE - Weather in {weather.name} (Nearest Place)
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <img
              src={iconUrl}
              alt={weather.weather[0].description}
              className="w-12 h-12"
            />
            <p className="capitalize">{weather.weather[0].description}</p>
          </div>
          <p className="mt-2">
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="mr-2" />
            Temperature: {weather.main.temp}°C
          </p>
          <p>
            <FontAwesomeIcon icon={faWater} className="mr-2" />
            Humidity: {weather.main.humidity}%
          </p>
          <p>
            <FontAwesomeIcon icon={faWind} className="mr-2" />
            Wind Speed: {weather.wind.speed} m/s
          </p>
        </div>

        <div>
        <h1 className='md:mt-0 mt-4 text-xl font-semibold'>Average Weather Summary in {destination.name}</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center md:mt-2 mt-4  cursor-pointer" >
         
  {destination.mons.map((mons, i) => (
    <div key={i} className="flex p-4 rounded-md  bg-gray-950 cursor-pointer scale-[1] hover:scale-[1.2] transition-all shadow-md">
      <div className="flex justify-center items-center w-16 h-16 rounded-full">
        <div className="text-gray-400 w-[100px] p-2 rounded-md text-center">
          <h4 className="text-md text-gray-400 font-medium">{mons.mons}</h4>
          <p className="text-gray-500 text-sm font-semibold ">{mons.weather}
        



          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="mr-1"
            />
            {mons.temp}°C
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
