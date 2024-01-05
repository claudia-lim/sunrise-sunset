function CurrentLocationButton ({setGeoLocJson}) {
    function useCurrentLocation (position) {
        const coords = position.coords;
        setGeoLocJson({results: [{locations: [{latLng: {lat: coords.latitude, lng:coords.longitude}, adminArea5: ""}]}]});
    }
    function currentLocClick () {
        navigator.geolocation.getCurrentPosition(useCurrentLocation);
    }

    return (
        <>
            <button className="button" onClick={currentLocClick}>Use Current Location</button>
        </>
    )
}

export default CurrentLocationButton