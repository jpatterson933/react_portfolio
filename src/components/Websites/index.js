import React, { useState } from "react";
// style sheet
import './index.css';

export const Websites = (props) => {

    const [showMore, setShowMore] = useState(false);

    const [sites, setSites] = useState(
        {
            title: "Deal Buster",
            link: "https://www.bustindeals.com",
            id: 1,
            key: 1,
            details: "Single page website that display information and links to social media handles",
            
        }
    )

    return (
        <>

            <div>
                <h1>{sites.title}</h1>
                {sites.show ? <div> {sites.details} </div> : null}
                <button id={sites.id} onClick={() => sites.show = !sites.show} >Show/Hide Details</button>
            </div>



        </>
    )
}