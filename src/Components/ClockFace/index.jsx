import "./clockface.css"

function ClockFace ({time, timeZone}) {

    function displayClockFace (time, timezone='Europe/London') {
        if (time == "Invalid Date") {
            console.log("invalid date error handler")
            return;
        }
        let converted = time.toLocaleString('en-GB',
            {timeZone: timezone,
                hour12: true,
                hour: "2-digit",
                minute: "2-digit"
            }
        ).replace(" ", ":");
        const timeArray = converted.split(":")
        return {hour: timeArray[0], minutes: timeArray[1], timePeriod: timeArray[2]}
    }

    function calculateDegreeRotation (input, timeInt) {
        if (input != undefined) {
            return ((input / timeInt) * 360) + 90;
        } else {
            return 0;
        }

            // return 90;
    }

    let timeObject = displayClockFace(time, timeZone);
    return (
        <>
            <h4>{ timeObject ? `${timeObject.hour} : ${timeObject.minutes} ${timeObject.timePeriod.toUpperCase()}` : "no location entered yet"}</h4>
            <div className="clock-face-container">
                <div className="clock-face">
                    <div className="hours-hand hand" style={timeObject ? {"transform": `rotate(${calculateDegreeRotation(timeObject.hour, 12)}deg`} : {}}></div>
                    <div className="minutes-hand hand" style={timeObject ? {"transform": `rotate(${calculateDegreeRotation(timeObject.minutes, 60)}deg`} : {}}></div>
                </div>
            </div>
        </>
    )
}

export default ClockFace