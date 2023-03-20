import React from 'react';
// pre-built components
import { ListItem } from '../List';
import { Link } from '../Link';
import { Header, HeaderThree } from '../Headers';
// details for Card component
import { CardDetails } from './CardDetails';
// import styling
import './index.css';
export const Card = () => {

    const cardLinkClasses = "row xp-link";
    const cards = CardDetails.map((card) => {
        return (
            <article className="card" key={card.key}>
                <Header className="card-body descrip-holder">
                    <HeaderThree className="card-title">{card.name}</HeaderThree>
                    <p className="card-text">{card.details}</p>
                </Header>
                <ul className="list-group list-group-flush cards-list">
                    {card.summary.map((details) => {
                        return <ListItem className="list-group-item" key={details}>{details}</ListItem>
                    })}
                </ul>
                <nav className="col">
                    <Link className={cardLinkClasses} href={card.github}>Github Repository</Link>
                    <Link className={cardLinkClasses} href={card.url}>Live Web Application</Link>
                </nav>
            </article>
        )
    })

    return (<>{cards}</>)
}
