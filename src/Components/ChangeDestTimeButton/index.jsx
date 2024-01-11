function ChangeDestTimeButton ({latitude, longitude, fetchTimeZone}) {

    function handleClick () {

        fetchTimeZone(latitude, longitude);
    }
    return <>
        <button onClick={handleClick}>Convert to destination time zone</button>
    </>
}

export default ChangeDestTimeButton