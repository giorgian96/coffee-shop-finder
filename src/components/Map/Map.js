import './Map.css';
import { mapService } from '../../services/mapService';

const Map = () => {
  mapService.initMap();

  return (
    <canvas id="map"></canvas>
  )
}

export default Map