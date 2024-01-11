function ChangeTimeButton ({setTimeZone, buttonText, latitude, longitude}) {

    const timeZoneAPIKey = "UK9T0NQIMRAC";

    async function fetchTimeZone() {
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

    function handleClick () {
        console.log("lat: ", latitude);
        console.log("lng: ", longitude);
        fetchTimeZone();

    }
    return <>
        <button onClick={handleClick}>{buttonText}</button>
    </>
}

export default ChangeTimeButton