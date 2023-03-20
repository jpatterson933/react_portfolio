import React from "react";
import './index.css';
import profilePhoto from '../../assets/profile_photo.jpg';
import { LoadingElement } from "../Loading";
import { Link } from "../Link";
import { Button } from "../Button";
import { ListItem } from "../List/ListItem";
import { HeaderOne } from '../Headers';

export const Banner = () => {
    const navLinkClasses = "btn btn-dark col-md-3 col-sm-12";
    return (
        <div className="jumbotron jumbotron-fluid">
            <LoadingElement className="box" />
            <LoadingElement className="box-two" />
            <div className="container">
                <HeaderOne className="display-4" id="name">Jeffery W. Patterson</HeaderOne>
                <Link href="https://jpatterson933.github.io/resume/">
                    {<img className="profile-photo col-sm-3" src={profilePhoto} alt="Jeffery Patterson" />}
                    </Link>
                <Button className={navLinkClasses}>
                    <Link href="https://github.com/jpatterson933" linktitle="Github" >Github</Link>
                </Button>
                <Button className={navLinkClasses}>
                    <Link href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</Link>
                </Button>
                <Button className={navLinkClasses}>
                    <Link href="https://jpatterson933.github.io/resume/">Resume</Link>
                </Button>
                <ul className="col-sm-3 col-xs-12 contact-info">
                    <ListItem name={<Link url="mailto: jpatterson933@ucla.edu?subject=I want to hire you!" id="email" linktitle="jpatterson933@ucla.edu" />}></ListItem>
                    <ListItem id="cell" name="(951) 581-6263" />
                </ul>
            </div>
        </div>
    )
}