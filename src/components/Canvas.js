import React from "react";
import "./Canvas.css"


export default class Canvas extends React.Component {
    render() {
        return (
            <canvas id="canvas" width="512px" height="512px" ></canvas>
        )
    }
}