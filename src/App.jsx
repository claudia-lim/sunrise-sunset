import { useState } from 'react'
import './App.css'
import InputForm from "./Components/InputForm/index.jsx";
import Output from "./Components/Output/index.jsx";

function App() {

    const [input, setInput] = useState("");
    const [geoLocJson, setGeoLocJson] = useState({})
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const key = "HQNofba0fy6MwKlkN0KGrlB2Hj88KqTM";

    async function fetchGeoLocation () {
        const customSettings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json", //state what type is being sent
            },
        };
        const response = await fetch(
            `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${input}`,
            customSettings
        );
        const geoLocData = await response.json();
        setGeoLocJson(geoLocData);
        setLatitude(geoLocJson.results[0].locations[0].latLng.lat)
        setLongitude(geoLocJson.results[0].locations[0].latLng.lng)
    }

    return (
    <>
      <div>
          <h1>Sunrise/Sunset Calculator</h1>
          <InputForm input={input} setInput={setInput} fetchGeoLocation={fetchGeoLocation}/>
          <Output input={input} lat={latitude} lng={longitude}/>
      </div>
    </>
  )
}

export default App
