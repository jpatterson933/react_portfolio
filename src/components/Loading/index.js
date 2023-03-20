import React from "react";
// style sheet
import './index.css';

export const LoadingElement = (props) => {
    return (
        <div className="box" {...props}>
            <div id="innerbox">
            </div>

        </div>
    )
}