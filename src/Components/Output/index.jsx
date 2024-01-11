import {useEffect, useState} from "react";
import ChangeTimeButton from "../ChangeTimeButton/index.jsx";

function Output ({geoLocJson, sunriseTime, sunsetTime, setSunriseSunsetData, currentTime}) {

    const city = geoLocJson.results[0].locations[0].adminArea5;
    const latitude = geoLocJson.results[0].locations[0].latLng.lat;
    const longitude = geoLocJson.results[0].locations[0].latLng.lng;
    const [timeZone, setTimeZone] = useState("Europe/London");

    function displayTime (time, timezone = 'Europe/London') {
        let converted = time.toLocaleString('en-US',
            { dateStyle: "medium",
                timeZone: timezone,
                timeStyle: "long" }
        )
        if (converted !== "Invalid Date") {
            return converted;
        } else {
            return ""
        }
    }

    useEffect(() => {
        if (latitude || longitude) {
            fetchSunriseSunset();
        }
    }, [latitude, longitude]);

    async function fetchSunriseSunset () {
        const customSettings = {
            method: "GET",
            headers: {
                "Origin": "https://2023-claudial.dev.io-academy.uk/"
            },
        };
        const response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`,
            customSettings
        );
        const sunriseSunsetJson = await response.json();
        if (sunriseSunsetJson.status === "OK") {
            setSunriseSunsetData(sunriseSunsetJson);
        } else {
            console.log('error');
        }
    }

    return (
        <div>
            <p>City: {city ? city : "No city entered"}</p>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>Sunrise: {displayTime(sunriseTime, timeZone)}</p>
            <p>Sunset: {displayTime(sunsetTime, timeZone)}</p>
            <p>Current time: {displayTime(currentTime, timeZone)}</p>
            <div className="change-tz-button">
                <ChangeTimeButton
                    setTimeZone={setTimeZone}
                    buttonText="Convert to Destination Time Zone"
                    latitude={latitude}
                    longitude={longitude}/>
                <ChangeTimeButton
                    setTimeZone={setTimeZone}
                    buttonText="Convert to GMT"
                    latitude="51.477928"
                    longitude="-0.001545"/>
            </div>

        </div>
    )
}

export default Output