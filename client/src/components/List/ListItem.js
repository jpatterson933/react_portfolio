import React from 'react';

export const ListItem = (props) => {
    return (
        <li className="list-group-item list-group-item-action list-group-item-primary">{props.name}</li>
    )
}