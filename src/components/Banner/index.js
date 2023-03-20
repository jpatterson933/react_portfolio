import React from "react";
// banner components
import { Button } from "../Button";
import { Header, HeaderOne } from '../Headers';
import { Link } from "../Link";
import { LoadingElement } from "../Loading";
import { Nav } from "../Nav";
// styling 
import './index.css';

export const Banner = () => {
    const navLinkClasses = "btn btn-dark col-md-2 col-sm-12";
    return (
        <Header className="jumbotron jumbotron-fluid">
            <LoadingElement className="box" />
            <LoadingElement className="box-two" />
            <div className="container">
                <HeaderOne className="display-4" id="name">Jeffery W. Patterson</HeaderOne>

                <Nav id="banner-nav" className="row justify-content-center">
                    <Button className={navLinkClasses}>
                        <Link href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</Link>
                    </Button>
                    <Button className={navLinkClasses}>
                        <Link href="https://jpatterson933.github.io/resume/">Resume</Link>
                    </Button>
                    <Button className={navLinkClasses}>
                        <Link href="https://github.com/jpatterson933">Github</Link>
                    </Button>
                    <Button className={navLinkClasses}>
                        <Link href="mailto: jpatterson933@ucla.edu?subject=I want to hire you!">Email</Link>
                    </Button>
                </Nav>
            </div>
        </Header>
    )
}