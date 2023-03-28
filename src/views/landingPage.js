import React from 'react';
// Styles
import './index.css';
// Components
import { Card } from '../components/Card';
import { HeaderContainer } from './containers';

export const LandingPage = () => {

    const rowStyles = {
        justifyContent: "space-evenly",

    }
    return (
        <div>
            {/* This is the top greay bar on the page  */}
            {/* <CanvasContainer /> */}
            <nav className="navbar navbar-dark" id="nav"></nav>
            <HeaderContainer />
            <nav className="navbar navbar-dark" id="nav"></nav>

            <main className="about-wrapper">
                {/* <h1 className="row justify-content-center" id="projects-id-link">My Work</h1> */}
                <div className="row" style={rowStyles}>
                    <Card />
                </div>
            </main>
        </div>
    )
}