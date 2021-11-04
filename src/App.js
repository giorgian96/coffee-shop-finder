import './App.css';
import { useEffect, useState } from 'react';
import { mapService } from './services/mapService';
import { apiService } from './services/apiService';
import InputCoords from './components/InputCoords/InputCoords';
import Map from './components/Map/Map';

function App() {
  const [userPosition, setUserPosition] = useState({
    latitude: 45,
    longitude: 25
  });

  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData(){
      const result = await apiService.getNearestShops(userPosition);
      if(!ignore){
        setCoffeeShops(result);
        mapService.initMap(coffeeShops);
        mapService.drawUserLocation(userPosition);
      }
    }

    fetchData();
    return () => { ignore = true; }
  }, [userPosition, coffeeShops]);

  return (
    <div className="container">
      <InputCoords transmitUserCoords={(latitude, longitude) => {
        setUserPosition({
          latitude,
          longitude
        });

        mapService.drawUserLocation(userPosition);
      }} />
      <Map />
    </div>
  );
}

export default App;