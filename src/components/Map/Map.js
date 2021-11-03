import './Map.css';
import { useEffect } from 'react';
import { mapService } from '../../services/mapService';

const Map = () => {
  useEffect(() => {
    mapService.drawMap(
      {
        latitude: 45,
        longitude: 25
      },
      [
        {latitude: 50, longitude: 5},
        {latitude: 40, longitude: -60},
        {latitude: -30, longitude: -50},
        {latitude: 0, longitude: 0},
        {latitude: -80, longitude: 20}
      ]
    );
  }, []);

  return (
    <canvas id="map" className="map"></canvas>
  )
}

export default Map