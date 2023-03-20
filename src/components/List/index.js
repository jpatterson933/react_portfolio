import React from 'react';

export const UnorderedList = (props) => {return <ul {...props}></ul>}


export const ListItem = (props) => { return <li {...props}>{props.children}</li> }