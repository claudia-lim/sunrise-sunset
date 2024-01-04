function InputForm({input, setInput, fetchGeoLocation}) {

    function submitClick () {
        fetchGeoLocation();
    }

    return (
        <div>
            <input type="text" id="input" placeholder="Type in Location" value={input} onChange={(e) => {
                setInput(e.target.value);
            }}></input>
            <button onClick={submitClick}>Submit</button>
        </div>
    )
}

export default InputForm
