function CurrentLocationButton ({setGeoLocJson, apiKey}) {

    async function reverseFetchGeoLocation(position) {
        const coords = position.coords;
        const customSettings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json", //state what type is being sent
            },
        };
        const response = await fetch(
            `https://www.mapquestapi.com/geocoding/v1/reverse/?key=${apiKey}&location=${coords.latitude},${coords.longitude}`,
            customSettings
        );
        if (response.status === 200) {
            const geoLocData = await response.json();
            setGeoLocJson(geoLocData);
        }
    }
    function currentLocClick () {
        navigator.geolocation.getCurrentPosition(reverseFetchGeoLocation);
    }

    return (
        <>
            <button className="button" onClick={currentLocClick}>Use Current Location</button>
        </>
    )
}

export default CurrentLocationButton