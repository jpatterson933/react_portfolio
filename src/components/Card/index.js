import React from 'react';
// pre-built components
import { ListItem } from '../List/ListItem';
import { Link } from '../Link';
import { HeaderFive } from '../Headers';
// details for Card component
import { CardDetails } from './CardDetails';
export const Card = () => {

    const cardLinkClasses = "row xp-link";
    const cards = CardDetails.map((card) => {
        return (
            <div className="card" key={card.id}>
                <div className="card-body descrip-holder">
                    <HeaderFive className="card-title">{card.name}</HeaderFive>
                    <p className="card-text">{card.details}</p>
                </div>
                <ul className="list-group list-group-flush cards-list">
                    {card.summary.map((deets) => {
                        return (
                            <ListItem
                                className="list-group-item"
                                name={deets}
                                key={deets}
                            />
                        )
                    })}
                </ul>
                <div className="col">
                    <Link className={cardLinkClasses} href={card.github}>Github Repository</Link>
                    <Link className={cardLinkClasses} href={card.url}>Live Web Application</Link>
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
