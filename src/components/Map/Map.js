import './Map.css';
import { useEffect, useState } from 'react';
import { mapService } from '../../services/mapService';
import { apiService } from '../../services/apiService';

const Map = () => {
  const [userPosition, setUserPosition] = useState({
    latitude: 45,
    longitude: 25
  });

  const [coffeeShops, setCoffeeShops] = useState([])

  useEffect(() => {
    async function validateAndFetchData(){      
      if (apiService.validateValues(userPosition.latitude, userPosition.longitude)) {
        setCoffeeShops(await apiService.getNearestShops(userPosition));
      }
    }
    validateAndFetchData();

    mapService.drawMap(userPosition, coffeeShops);
  }, [userPosition, coffeeShops]);

  return (
    <canvas id="map" className="map"></canvas>
  )
}

export default Map