import React from "react";
import { Button } from "../components/Button";
import { Canvas } from "../components/Canvas";
import { Card } from "../components/Card";
import { Header, HeaderOne } from "../components/Headers";
import { Link } from "../components/Link";
import { LoadingElement } from "../components/Loading";
import { Nav } from "../components/Nav";

import './index.css';


export const NavContainer = () => {
    const navLinkClasses = "btn btn-dark col-md-2 col-sm-8";

    const links = ["https://www.linkedin.com/in/jefferywpatterson/", "https://jpatterson933.github.io/resume/", "https://github.com/jpatterson933", "mailto: jpatterson933@ucla.edu?subject=I want to hire you!"]
    const linkNames = ["LinkedIn", "Resume", "Github", "Email"]
    return (
        <Nav id="banner-nav" className="row justify-content-center">
            <Button className={navLinkClasses}>
                <Link href={links[0]}>{linkNames[0]}</Link>
            </Button>
            <Button className={navLinkClasses}>
                <Link href={links[1]}>{linkNames[1]}</Link>
            </Button>
            <Button className={navLinkClasses}>
                <Link href={links[2]}>{linkNames[2]}</Link>
            </Button>
            <Button className={navLinkClasses}>
                <Link href={links[3]}>{linkNames[3]}</Link>
            </Button>
        </Nav>

    )
}

export const HeaderContainer = () => {

    const jumboStyle = {
        margin: "0 1em",
        padding: 0,
        backgroundColor: "transparent",
        

    }

    return (
        <Header style={jumboStyle} className="jumbotron-fluid">
            <LoadingElement className="box" />
            <LoadingElement className="box-two" />
            <div className="container">
                <HeaderOne className="display-4" id="name-title">Jeffery W. Patterson</HeaderOne>
                <NavContainer />
            </div>
            <Canvas width={"fit-content"} />
        </Header>
    )
}

export const CardContainer = () => {
    return (
        <section id="section">

            <Card />
        </section>
    )
}

export const CanvasContainer = () => {

    return (
        <Canvas width={1400} />
    )
}