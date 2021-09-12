import React from 'react';

export const ButtonLink = (props) => {
    return (
        <button className="btn btn-dark col-md-3 col-sm-12">
            <a href={props.link}{...props} rel="noopener noreferrer" target="_blank">{props.name}</a>
        </button>
    )
}