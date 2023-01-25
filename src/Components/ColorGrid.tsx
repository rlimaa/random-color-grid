import React, { Component } from "react"
import ColorBox from "./ColorBox";
import "./ColorGrid.css"


class ColorGrid extends Component {
    colors = [
        "#cdb4db",
        "#ffc8dd",
        "#ffafcc",
        "#bde0fe",
        "#a2d2ff",
        "#ffcdb2",
        "#ffb4a2",
        "#e5989b",
        "#b5838d",
        "#6d6875",
        "#000000",
        "#ffffff"
    ];

    state = {
        colors: this.colors.map(x => {return {color: x}})
    }

    handleClick(idx: number) {
        const currColors = this.state.colors.slice();

        const randColors = this.colors.slice();

        const removeColor = this.state.colors[idx].color;
        randColors.splice(randColors.indexOf(removeColor), 1);

        const newColor = this.colors[Math.floor(Math.random() * randColors.length)];
        currColors[idx] = {color: newColor};
        this.setState({colors: currColors})
    }

    render() {
        let colorBoxes = this.state.colors.map((color, idx) => {
            return <ColorBox key={idx} id={idx} onClick={() => this.handleClick(idx)} {...color}/>
        })
        return (
            <div className="ColorGrid">
                {colorBoxes}
            </div>
        );
    }
}

export default ColorGrid;