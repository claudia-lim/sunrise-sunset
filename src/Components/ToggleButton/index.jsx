function ToggleButton({mode, setMode}) {
    return (
        <>
            <button onClick={() => {
                if (mode === "day") {
                    setMode("night");
                } else {
                    setMode("day");
                }
            }}>Toggle Day/Night</button>
        </>
    )
}

export default ToggleButton