import React from 'react';

export const ListItem = (props) => {
    return (
        <li {...props}>{props.name}</li>
    )
}