import React from 'react';
// Styles
import './index.css';
// Components
import { Card } from '../components/Card';
import { Banner } from '../components/Banner';

export const LandingPage = () => {
    return (
        <div>
            {/* This is the top greay bar on the page  */}
            <nav className="navbar navbar-dark" id="nav"></nav>
            <Banner />
            <nav className="navbar navbar-dark" id="nav"></nav>

            <main className="about-wrapper">
                <h1 className="row justify-content-center" id="projects-id-link">My Work</h1>
                <div className="row">
                    <Card />
                </div>
            </main>
        </div>
    )
}