import React from 'react';
import { ListItem } from '../List/ListItem';
import { Link } from '../Link';
import { CardDetails } from './CardDetails';

export const Card = () => {
    const cards = CardDetails.map((card) => {
        console.log(card)
        return (
            <div className="card" >
                <div className="card-body descrip-holder">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.details}</p>
                </div>

                <ul className="list-group list-group-flush cards-list">
                    {card.summary.map((deets) => {
                        console.log(deets)
                        return (
                            <ListItem
                                className="list-group-item"
                                name={deets}
                            />
                        )
                    })}
                </ul>
                <div className="col">
                    <Link
                        className="row xp-link"
                        url={card.github}
                        linktitle="Github Repository"
                        newwindow="_blank"
                    />
                    <Link
                        className="row xp-link"
                        url={card.url}
                        linktitle="Live Web Application"
                        newwindow="_blank"
                    />
                </div>
            </div>
        )
    })

    return (
        <>
                {cards}
        </>
    )
}
