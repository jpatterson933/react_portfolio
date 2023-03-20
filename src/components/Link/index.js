import React from 'react';

export const Link = (props) => {
    return <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
}