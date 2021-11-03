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
          let latitude = document.getElementById('latitudeInput').value;
          let longitude = document.getElementById('longitudeInput').value;
        }}>Submit</button>
      </div>
    </div>
  )
}

export default InputCoords
