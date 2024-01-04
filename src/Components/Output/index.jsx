import {useEffect, useState} from "react";

function Output ({geoLocJson}) {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [city, setCity] = useState("");

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

    return (
        <div>
            <p>{city}</p>
            <p>Latitude = {latitude}</p>
            <p>Longitude = {longitude}</p>
        </div>
    )
}

export default Output