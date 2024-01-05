import {useEffect} from "react";

function Output ({geoLocJson, sunrise, sunset, setSunriseSunsetData}) {
    const latitude = geoLocJson.results[0].locations[0].latLng.lat;
    const longitude = geoLocJson.results[0].locations[0].latLng.lng;
    const city = geoLocJson.results[0].locations[0].adminArea5;
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);

    useEffect(() => {
        if (latitude || longitude) {
            fetchSunriseSunset();
        }
    }, [latitude, longitude]);

    async function fetchSunriseSunset () {
        const customSettings = {
            method: "GET",
            headers: {
                "Origin": "http://localhost:5173"
            },
        };
        const response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0&tzId=GMT`,
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
            <p>{city}</p>
            <p>Latitude = {latitude}</p>
            <p>Longitude = {longitude}</p>
            <p>Sunrise: {sunriseTime.toLocaleTimeString(["GMT"], {timeZoneName: "short"})}</p>
            <p>Sunset: {sunsetTime.toLocaleTimeString(["GMT"], {timeZoneName: "short"})}</p>
        </div>
    )
}

export default Output