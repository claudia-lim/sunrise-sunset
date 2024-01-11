import {useEffect, useState} from "react";
import ChangeDestTimeButton from "../ChangeDestTimeButton/index.jsx";
import ChangeCurrentTimeZoneButton from "../ChangeCurrentTimeZoneButton/index.jsx";

function Output ({geoLocJson, sunriseTime, sunsetTime, setSunriseSunsetData, currentTime}) {

    const city = geoLocJson.results[0].locations[0].adminArea5;
    const latitude = geoLocJson.results[0].locations[0].latLng.lat;
    const longitude = geoLocJson.results[0].locations[0].latLng.lng;
    const [timeZone, setTimeZone] = useState("Europe/London");
    let currentLat;
    let currentLng;

    function displayTime (time, timezone = 'Europe/London') {
        let converted = time.toLocaleString('en-GB',
            {timeZone: timezone,
                hour12: true,
                weekday: "short",
                month:"short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "shortGeneric" }
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
            fetchTimeZone(latitude, longitude);
        }
    }, [latitude, longitude]);

    const timeZoneAPIKey = "UK9T0NQIMRAC";

    async function fetchTimeZone(latitude, longitude) {
        const customSettings = {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*"
            },
        };
        const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZoneAPIKey}&by=position&lat=${latitude}&lng=${longitude}&format=json`, customSettings);
        const timeZoneJson = await response.json();
        if (timeZoneJson.status === "OK") {
            setTimeZone(timeZoneJson.zoneName);
        }

    }

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
                <ChangeDestTimeButton
                    latitude={latitude}
                    longitude={longitude}
                    fetchTimeZone={fetchTimeZone}/>
                <ChangeCurrentTimeZoneButton fetchTimeZone={fetchTimeZone} />

            </div>

        </div>
    )
}

export default Output