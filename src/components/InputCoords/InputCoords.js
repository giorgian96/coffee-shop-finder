import { apiService } from '../../services/apiService';
import './InputCoords.css';

const InputCoords = ({transmitUserCoords}) => {
  return (
    <div className="inputContainer">
      <div className="inputElement">
        <label>Latitude:</label>
        <input type="text" className="coordsInput" id="latitudeInput" placeholder="Values between -90 and 90"></input>
      </div>
      <div className="inputElement">
        <label>Longitude:</label>
        <input type="text" className="coordsInput" id="longitudeInput" placeholder="Values between -180 and 180"></input>
      </div>
      <div className="inputElement">
        <button className="submitBtn" onClick={(e) => {
          e.preventDefault();
          let latitude = parseFloat(document.getElementById('latitudeInput').value);
          let longitude = parseFloat(document.getElementById('longitudeInput').value);

          if(apiService.validateCoordinates(latitude, longitude)){
            transmitUserCoords(latitude, longitude);

            document.getElementById('latitudeInput').value = "";
            document.getElementById('longitudeInput').value = "";
          }
        }}>Submit</button>
      </div>
    </div>
  )
}

export default InputCoords
