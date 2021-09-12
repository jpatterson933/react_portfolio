import React from 'react';

export const Link = (props) => {
    return (
        <a href={props.url} {...props} target={props.newWindow} rel="noopener noreferrer">{props.linkTitle}</a>
    )
}