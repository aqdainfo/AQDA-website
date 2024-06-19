import React from 'react'

function ToggleSwitch({ Name, setIsTranscript }) {
    function handleChange(e) {
        console.log(e.target.checked)
        setIsTranscript(!e.target.checked)
    }
    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={Name}
                id={Name}
                onChange={handleChange}
            />
            <label className="toggle-switch-label" htmlFor={Name}>
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    )
}

export default ToggleSwitch