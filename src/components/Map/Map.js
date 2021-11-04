import './Map.css';
import { useEffect, useState } from 'react';
import { mapService } from '../../services/mapService';
import { apiService } from '../../services/apiService';

const Map = () => {
  const [userPosition, setUserPosition] = useState({
    latitude: 45,
    longitude: 25
  });

  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    validateAndFetchData(userPosition, setCoffeeShops);

    mapService.drawMap(userPosition, coffeeShops);
  }, [userPosition, coffeeShops]);

  return (
    <canvas id="map" className="map"></canvas>
  )
}

async function validateAndFetchData(userPosition, setCoffeeShopsFn){      
  if (apiService.validateCoordinates(userPosition.latitude, userPosition.longitude)) {
    setCoffeeShopsFn(await apiService.getNearestShops(userPosition));
  }
}

export default Map