function ChangeCurrentTimeZoneButton ({fetchTimeZone, setUsingCurrentLocationTimeZone}) {

    let currLatitude = 0;
    let currLongitude = 0;

    function getCoords (position) {
        currLatitude = position.coords.latitude;
        currLongitude = position.coords.longitude;
    }
    function handleClick () {
        navigator.geolocation.getCurrentPosition(getCoords);
        setUsingCurrentLocationTimeZone(true);
        fetchTimeZone(currLatitude, currLongitude);
    }
    return <>
        <button onClick={handleClick}>Change to your current time zone</button>
    </>
}

export default ChangeCurrentTimeZoneButton