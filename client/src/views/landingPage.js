import React from 'react';
import { LanguageSlider } from '../components/LanguageSlider';

import { ListItem } from '../components/List/ListItem';
import { Button } from '../components/Button/Button';
import { Link } from '../components/Link';

export const LandingPage = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" id="nav">
                <Button className="btn btn-dark row-3 button-flex"><Link url="#projects-id-link" linktitle="Check Out My Applications" /></Button>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="name">Jeffery W. Patterson</h1>
                    <Link
                        url="https://www.instagram.com/i_shred/"
                        newwindow="_blank"
                        linktitle={<img className="profile-photo col-sm-3" src="../../assets/profile_photo.jpg" alt="Jeffery Patterson"></img>}
                    />
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="https://github.com/jpatterson933" linktitle="Github" newwindow="_blank" /></Button>
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="https://www.linkedin.com/in/jefferywpatterson/" linktitle="LinkedIn" newwindow="_blank" /></Button>
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="assets/media/my-resume-6.7.pdf" download linktitle="Resume"></Link></Button>
                    <ul className="col-sm-3 col-xs-12 contact-info">
                        <ListItem name={<Link url="mailto: jpatterson933@ucla.edu?subject=I want to hire you!" linktitle="jpatterson933@ucla.edu" />}></ListItem>
                        <ListItem id="cell" name="(951) 581-6263" />
                    </ul>
                </div>
            </div>
            <LanguageSlider />
            <main className="about-wrapper">
                <section>
                    <aside>
                        <div>
                            <h3>A bit about me...</h3>
                            <p> I love to code.
                            </p>
                            <h1>fin</h1>
                        </div>
                    </aside>
                </section>

                <h1 className="row justify-content-center" id="projects-id-link">My Applications</h1>
                <div className="row">
                    <div className="card" >
                        <div className="card-body descrip-holder">
                            <h5 className="card-title">Xp-Pedia</h5>
                            <p className="card-text">Create a username, find any game in the world and save it to your profile!
                                Work the time it takes to beat a game, into your 9-5 schedule.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush cards-list">
                            <ListItem
                                className="list-group-item"
                                name="Find any Game in the world"
                            />
                            <ListItem
                                className="list-group-item"
                                name="Find Game Completion Time"
                            />
                            <ListItem
                                className="list-group-item"
                                name="Beat that game"
                            />
                        </ul>
                        <div className="col">
                            <Link
                                className="row xp-link"
                                url="https://github.com/anthonyapicella/XP-pedia"
                                linktitle="Github Repository"
                                newwindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://anthonyapicella.github.io/XP-pedia/"
                                linktitle="Live Web Application"
                                newwindow="_blank"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body descrip-holder">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Find the weather for any city in the world, save the city to your dashboard,
                                and view the weather at any time or find a new city.</p>
                        </div>
                        <ul className="list-group list-group-flush cards-list">
                            <ListItem
                                className="list-group-item"
                                name="Weather Reports"
                            />
                            <ListItem
                                className="list-group-item"
                                name="5 Day forecast"
                            />
                            <ListItem
                                className="list-group-item"
                                name="Save favorite City"
                            />
                        </ul>
                        <div className="col card-body">
                            <Link
                                className="row xp-link"
                                url="https://github.com/jpatterson933/weather-dashboard"
                                linktitle="Github Repository"
                                newwindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://jpatterson933.github.io/weather-dashboard/"
                                linktitle="Web Application"
                                newwindow="_blank"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body descrip-holder">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">A Blog where a user can create a profile, login and post and comment about anything.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush cards-list">
                            <ListItem
                                className="list-group-item"
                                name="Unique Profile"
                            />
                            <ListItem
                                className="list-group-item"
                                name="Encrypted Information"
                            />
                            <ListItem
                                className="list-group-item"
                                name="Very Smooth Design"
                            />
                        </ul>
                        <div className="col card-body">
                            <Link
                                className="row xp-link"
                                url="https://github.com/jpatterson933/tech-blog-version-1.0"
                                linktitle="Github Repository"
                                newwindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://fast-lowlands-84430.herokuapp.com/"
                                linktitle="Web Application"
                                newwindow="_blank"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}