function InputForm({input, setInput}) {

    function submitClick () {
        console.log(input)
    }

    return (
        <>
            <input type="text" id="input" placeholder="Type in Location" value={input} onChange={(e) => {
                setInput(e.target.value);
            }}></input>
            <button onClick={submitClick}>Submit</button>
        </>
    )
}

export default InputForm
