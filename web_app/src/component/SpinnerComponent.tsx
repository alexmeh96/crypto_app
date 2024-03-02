import "../styles/Spinner.css"
import React from "react";

interface SpinnerProps {
    ml?: string,
    width?: string;
}

function SpinnerComponent({ml = "0", width = "40"}: SpinnerProps) {

    return (
        <div className="spinner-3" style={{marginLeft: ml, width}}></div>
    );
}

export default SpinnerComponent;
