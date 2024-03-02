import "../styles/Select.css"
import React from "react";

function SelectComponent() {

    return (
        <div className="select" tabIndex={1}>
            <input className="selectopt" name="test" type="radio" id="opt1" checked/>
            <label htmlFor="opt1" className="option">Oranges</label>
            <input className="selectopt" name="test" type="radio" id="opt2"/>
            <label htmlFor="opt2" className="option">Apples</label>
            <input className="selectopt" name="test" type="radio" id="opt3"/>
            <label htmlFor="opt3" className="option">Grapefruit</label>
            <input className="selectopt" name="test" type="radio" id="opt4"/>
            <label htmlFor="opt4" className="option">Bananas</label>
            <input className="selectopt" name="test" type="radio" id="opt5"/>
            <label htmlFor="opt5" className="option">Watermelon</label>
        </div>
    );
}

export default SelectComponent;
