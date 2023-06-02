
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (props, ref) => {
    const url = props.url;

    <ReactPlayer
    url={url}
    controls={true}
    ref={ref} />
}
export default React.forwardRef(VideoPlayer);
