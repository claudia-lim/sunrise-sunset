import {useEffect, useState} from "react";

function Output ({geoLocJson, sunrise, sunset, setSunset, setSunrise}) {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [city, setCity] = useState("");
    const [sunriseSunsetData, setSunriseSunsetData] = useState({});


    useEffect(() => {
        if (!geoLocJson.initial && geoLocJson.results[0].locations[0].adminArea5){
            setLatitude(geoLocJson.results[0].locations[0].latLng.lat);
            setLongitude(geoLocJson.results[0].locations[0].latLng.lng);
            setCity(geoLocJson.results[0].locations[0].adminArea5);
            // fetchSunriseSunset();
        } else if (geoLocJson.initial){
            setCity("");
        } else {
            setCity("Error");
            setLatitude(0);
            setLongitude(0);
        }

    }, [geoLocJson]);


    async function fetchSunriseSunset () {
        const customSettings = {
            method: "GET",
            headers: {
                "Origin": "http://localhost:5173"
            },
        };
        const response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`,
            customSettings
        );
        const sunriseSunsetJson = await response.json();
        if (sunriseSunsetJson.status === "OK") {
            setSunriseSunsetData(sunriseSunsetData)
        } else {
            console.log('error');
        }
    }

    return (
        <div>
            <p>{city}</p>
            <p>Latitude = {latitude}</p>
            <p>Longitude = {longitude}</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
        </div>
    )
}

export default Output