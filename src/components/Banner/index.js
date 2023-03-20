import React from "react";
// banner components
import { LoadingElement } from "../Loading";
import { Link } from "../Link";
import { Button } from "../Button";
import { ListItem } from "../List";
import { HeaderOne } from '../Headers';
// assets
import profilePhoto from '../../assets/profile_photo.jpg';
// styling 
import './index.css';
export const Banner = () => {
    const navLinkClasses = "btn btn-dark col-md-3 col-sm-12";
    return (
        <header className="jumbotron jumbotron-fluid">
            <LoadingElement className="box" />
            <LoadingElement className="box-two" />
            <div className="container">

                <HeaderOne className="display-4" id="name">Jeffery W. Patterson</HeaderOne>

                <img className="profile-photo col-sm-3" src={profilePhoto} alt="Jeffery Patterson" />

                <Button className={navLinkClasses}>
                    <Link href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</Link>
                </Button>
                <Button className={navLinkClasses}>
                    <Link href="https://jpatterson933.github.io/resume/">Resume</Link>
                </Button>
                <Button className={navLinkClasses}>
                    <Link href="https://github.com/jpatterson933">Github</Link>
                </Button>
                <ul className="col-sm-3 col-xs-12 contact-info">
                    <ListItem>{<Link url="mailto: jpatterson933@ucla.edu?subject=I want to hire you!" id="email" linktitle="jpatterson933@ucla.edu" />}</ListItem>
                    <ListItem id="cell" name="(951) 581-6263" />
                </ul>
            </div>
        </header>
    )
}