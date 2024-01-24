import {useState, React} from 'react'
import './App.css'
import InputForm from "./Components/InputForm/index.jsx";
import Output from "./Components/Output/index.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import CurrentLocationButton from "./Components/CurrentLocationButton/index.jsx";

function App() {
    const [input, setInput] = useState("");
    const [geoLocJson, setGeoLocJson] = useState({results: [{locations: [{latLng: {lat: 0, lng:0}, adminArea5: ""}]}]})
    const [sunriseSunsetData, setSunriseSunsetData] = useState({results: {sunrise: "", sunset: ""}});
    const [usingCurrentLocationTimeZone, setUsingCurrentLocationTimeZone] = useState(false);
    const key = "HQNofba0fy6MwKlkN0KGrlB2Hj88KqTM";
    const sunrise = sunriseSunsetData.results.sunrise;
    const sunset = sunriseSunsetData.results.sunset;
    const sunriseTime = new Date (sunrise);
    const sunsetTime = new Date (sunset);
    const currentTime = new Date();
    let mode = "day";
    async function fetchGeoLocation () {
        setUsingCurrentLocationTimeZone(false);
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
        if (response.status === 200) {
            const geoLocData = await response.json();
            setGeoLocJson(geoLocData);
        }
    }

    if (currentTime > sunriseTime && currentTime < sunsetTime) {
        mode = "day";
    } else if (currentTime < sunriseTime || currentTime > sunsetTime) {
        mode = "night";
    }

    return (
    <>
        <main className={mode}>
            <h1>Sunrise/Sunset Calculator</h1>
            <div className="sun-icon icon">
                <FontAwesomeIcon icon={faSun}/>
            </div>
            <div className="moon-icon icon">
                <FontAwesomeIcon icon={faMoon}/>
            </div>
            <div className="input">
                <InputForm input={input} setInput={setInput} fetchGeoLocation={fetchGeoLocation}/>
                <CurrentLocationButton setGeoLocJson={setGeoLocJson} apiKey={key}/>
            </div>
            <div>
                <Output
                    geoLocJson={geoLocJson}
                    sunriseTime={sunriseTime}
                    sunsetTime={sunsetTime}
                    setSunriseSunsetData={setSunriseSunsetData}
                    currentTime={currentTime}
                    usingCurrentLocationTimeZone={usingCurrentLocationTimeZone}
                    setUsingCurrentLocationTimeZone={setUsingCurrentLocationTimeZone}
                />
            </div>
        </main>
        <footer id="footer" className={mode}>
            <h3>Claudia Lim 2024</h3>
            <a href="https://sunrise-sunset.org/api">Sunrise/Sunset API</a>
            <a href="https://developer.mapquest.com/documentation/geocoding-api/">GeoCoding API</a>
            <a href="https://timezonedb.com/">Time Zone Database API</a>
        </footer>
    </>
    )
}

export default App
