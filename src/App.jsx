import {useEffect, useState, React} from 'react'
import './App.css'
import InputForm from "./Components/InputForm/index.jsx";
import Output from "./Components/Output/index.jsx";
import ToggleButton from "./Components/ToggleButton/index.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

function App() {

    const [input, setInput] = useState("");
    const [geoLocJson, setGeoLocJson] = useState({initial:true})
    const [mode, setMode] = useState("day");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");
    const [sunriseSunsetData, setSunriseSunsetData] = useState({initial:true});
    console.log('sunrise sunset data - rendering of app.jsx', sunriseSunsetData);
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
        console.log('geolocdata', geoLocData);
    }

    return (
    <>
        <main className={mode}>
            <h1>Sunrise/Sunset Calculator</h1>
            <div className="sun-icon icon">
                <FontAwesomeIcon icon={faSun} />
            </div>
            <div className="moon-icon icon">
                <FontAwesomeIcon icon={faMoon} />
            </div>

            <InputForm input={input} setInput={setInput} fetchGeoLocation={fetchGeoLocation}/>
            <Output geoLocJson={geoLocJson} sunrise={sunrise} sunset={sunset} setSunrise={setSunrise}
                    setSunset={setSunset} sunriseSunsetData={sunriseSunsetData} setSunriseSunsetData={setSunriseSunsetData}/>
            <ToggleButton setMode={setMode} mode={mode}/>
        </main>
    </>
    )
}

export default App
