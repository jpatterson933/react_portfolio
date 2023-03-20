import React, { useState } from "react";
// style sheet
import './index.css';

export const Websites = (props) => {

    // const [showMore, setShowMore] = useState(false);

    const [sites, setSites] = useState(
        {
            title: "Deal Buster",
            link: "https://dealbuster.online",
            id: 1,
            key: 1,
            details: "Single page website that display information about brick and mortar retail locations",
            
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