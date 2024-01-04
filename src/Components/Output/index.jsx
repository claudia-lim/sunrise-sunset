import {useState} from "react";

function Output ({input, lat, lng}) {

    return (
        <div>
            <p>Latitude = {lat}</p>
            <p>Longitude = {lng}</p>
        </div>
    )
}

export default Output