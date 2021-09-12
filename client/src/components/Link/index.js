import React from 'react';

export const Link = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="row xp-link">{props.linkTitle}</a>
    )
}