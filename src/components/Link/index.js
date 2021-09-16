import React from 'react';

export const Link = (props) => {
    return (
        <a href={props.url} {...props} target={props.newwindow} rel="noopener noreferrer">{props.linktitle}</a>
    )
}