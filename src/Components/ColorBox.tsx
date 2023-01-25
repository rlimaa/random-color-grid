import React, { Component } from "react"
import ColorBoxProps from "../Interfaces/ColorBoxProps";
import "./ColorBox.css"

class ColorBox extends Component<ColorBoxProps, {}> {
    render() {
        return (
            <div className="ColorBox" onClick={() => this.props.onClick(this.props.id)} style={{backgroundColor: this.props.color}}>

            </div>
        );
    }
}

export default ColorBox;