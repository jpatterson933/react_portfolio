import React from 'react';
// import link styling 
import './index.css';

export const Link = (props) => {
    return <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
}