import {useState} from "react";

function InputForm({input, setInput, fetchGeoLocation}) {

    function submitClick () {
        fetchGeoLocation();

    }

    return (
        <div className="form">
            <input type="text" id="input" placeholder="Type in a City" value={input} onChange={(e) => {
                setInput(e.target.value);
            }}></input>
            <button onClick={submitClick}>Submit</button>
        </div>
    )
}

export default InputForm
