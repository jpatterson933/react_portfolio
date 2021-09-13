import React from 'react';

export const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body desrip-holder">
                <h5 className="card-title">{props.cardtitle}</h5>
                <p className="card-text">{props.carddetails}</p>
            </div>
        </div>
    )
}
