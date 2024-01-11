function ChangeDestTimeButton ({latitude, longitude, fetchTimeZone}) {

    function handleClick () {

        fetchTimeZone(latitude, longitude);
    }
    return <>
        <button onClick={handleClick}>Change to destination time zone</button>
    </>
}

export default ChangeDestTimeButton