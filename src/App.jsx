import {useEffect, useState, React} from 'react'
import './App.css'
import InputForm from "./Components/InputForm/index.jsx";
import Output from "./Components/Output/index.jsx";
import ToggleButton from "./Components/ToggleButton/index.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

function App() {

    const [input, setInput] = useState("");
    const [geoLocJson, setGeoLocJson] = useState({initial:true})
    const [mode, setMode] = useState("day");
    const [icon, setIcon] = useState("faSun")
    const [sunrise, setSunrise] = useState("2024-01-04T05:05:35+00:00");
    const [sunset, setSunset] = useState("2024-01-04T19:22:59+00:00");
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
    }

    useEffect(() => {
const sunriseTime = new Date(sunrise);
const sunsetTime = new Date(sunset);
const current = new Date("2024-01-04T21:22:59+00:00");
console.log(current);
console.log(sunriseTime);
console.log(sunsetTime);
if (current > sunsetTime || current < sunriseTime) {
    setMode("night");
    setIcon("faMoon");
} else {
    setMode("day");
    setIcon("faSun");
}
    }, [geoLocJson]);

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
                    setSunset={setSunset}/>
            <ToggleButton setMode={setMode} mode={mode}/>
        </main>
    </>
    )
}

export default App
