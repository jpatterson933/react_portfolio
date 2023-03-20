import React from "react";
import './index.css';
import profilePhoto from '../../assets/profile_photo.jpg';
import { LoadingElement } from "../Loading";
import { Link } from "../Link";
import { Button } from "../Button";
import { ListItem } from "../List/ListItem";

export const Banner = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <LoadingElement />
            <LoadingElement className="box-two" />
            <div className="container">
                <h1 className="display-4" id="name">Jeffery W. Patterson</h1>
                <Link
                    href="https://jpatterson933.github.io/resume/"
                    linktitle={<img className="profile-photo col-sm-3" src={profilePhoto} alt="Jeffery Patterson"></img>}
                />
                <Button className="btn btn-dark col-md-3 col-sm-12">
                    <Link url="https://github.com/jpatterson933" linktitle="Github" newwindow="_blank" />
                </Button>
                <Button className="btn btn-dark col-md-3 col-sm-12">
                    <Link url="https://www.linkedin.com/in/jefferywpatterson/" linktitle="LinkedIn" newwindow="_blank" />
                </Button>
                <Button className="btn btn-dark col-md-3 col-sm-12">
                    <Link url="https://jpatterson933.github.io/resume/" linktitle="Resume" newwindow="_blank" />
                </Button>
                <ul className="col-sm-3 col-xs-12 contact-info">
                    <ListItem name={<Link url="mailto: jpatterson933@ucla.edu?subject=I want to hire you!" id="email" linktitle="jpatterson933@ucla.edu" />}></ListItem>
                    <ListItem id="cell" name="(951) 581-6263" />
                </ul>
            </div>
        </div>
    )
}