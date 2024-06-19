import React from "react";
function getHighlightedText(text, higlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    if(higlight !== undefined) {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === higlight.toLowerCase() ? (
                <b style={{ backgroundColor: "#EDB81E", textDecoration: "underline"}}>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
            }
}

const HighlightedText = (props) => {

    const value = props.value;
    let higlight = props.highlight;

    return (
        <p>{getHighlightedText(value, higlight)}</p>
    )
  }
  export default HighlightedText;