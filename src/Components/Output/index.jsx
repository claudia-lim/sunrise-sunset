import {useEffect, useState} from "react";

function Output ({geoLocJson, sunrise, sunset, setSunset, setSunrise, sunriseSunsetData, setSunriseSunsetData}) {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [city, setCity] = useState("");
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);

    useEffect(() => {
        if (!geoLocJson.initial && geoLocJson.results[0].locations[0].adminArea5){
            setLatitude(geoLocJson.results[0].locations[0].latLng.lat);
            setLongitude(geoLocJson.results[0].locations[0].latLng.lng);
            setCity(geoLocJson.results[0].locations[0].adminArea5);

        } else if (geoLocJson.initial){
            setCity("");
        } else {
            setCity("Error");
            setLatitude(0);
            setLongitude(0);
        }

    }, [geoLocJson]);

    useEffect(() => {
        fetchSunriseSunset();
    }, [latitude, longitude]);

    useEffect(() => {
        console.log('time use effect called');
        if (!sunriseSunsetData.initial) {
            setSunrise(sunriseSunsetData.results.sunrise);
            setSunset(sunriseSunsetData.results.sunset);
        }
    }, [sunriseSunsetData]);

    async function fetchSunriseSunset () {
        const customSettings = {
            method: "GET",
            headers: {
                "Origin": "http://localhost:5173"
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
            <p>{city}</p>
            <p>Latitude = {latitude}</p>
            <p>Longitude = {longitude}</p>
            <p>Sunrise: {sunriseTime.toTimeString()}</p>
            <p>Sunset: {sunsetTime.toTimeString()}</p>
        </div>
    )
}

export default Output