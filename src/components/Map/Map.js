import './Map.css';
import { useEffect } from 'react';
import { mapService } from '../../services/mapService';

const Map = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      mapService.initMap();
    });

    return () => {
      window.removeEventListener('load', () => {
        mapService.initMap();
      });
    }
  });

  return (
    <canvas id="map"></canvas>
  )
}

export default Map