function ChangeDestTimeButton ({latitude, longitude, fetchTimeZone, setUsingCurrentLocationTimeZone}) {

    function handleClick () {
        setUsingCurrentLocationTimeZone(false);
        fetchTimeZone(latitude, longitude);
    }
    return <>
        <button onClick={handleClick}>Change to destination time zone</button>
    </>
}

export default ChangeDestTimeButton