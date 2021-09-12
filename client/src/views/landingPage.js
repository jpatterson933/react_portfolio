import React from 'react';
import { ButtonLink } from '../components/Button/ButtonLink';
import { ListItem } from '../components/List/ListItem';

export const LandingPage = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" id="nav">
                <div className="button-flex">
                    <button className="btn btn-dark row-3"><a href="#projects-id-link">Check Out My Applications!</a></button>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="name">Jeffery W. Patterson</h1>
                    <a href="https://www.instagram.com/i_shred/" target="_blank" rel="noopener noreferrer">
                        <img className="profile-photo col-sm-3" src="../../assets/profile_photo.jpg" alt="Jeffery Patterson"></img>
                    </a>
                    <ButtonLink link="https://github.com/jpatterson933" name="Github" />
                    <ButtonLink link="https://www.linkedin.com/in/jefferywpatterson/" name="LinkedIn" />
                    <button className="btn btn-dark col-md-3 col-sm-12"><a href="assets/media/my-resume-6.7.pdf" download>Resume</a></button>
                    <ul className="col-sm-3 col-xs-12 contact-info">
                        <ListItem><a href="mailto: jpatterson933@ucla.edu?subject=I just viewed your portfolio!">jpatterson933@ucla.edu</a></ListItem>
                        <ListItem id="cell" name="(951) 581-6263" />
                    </ul>
                    <div className="list-group" id="skills">
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Known Languages" />
                        <ListItem 
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="HTML" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="CSS" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Javascript" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Jquery" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Bootstrap" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Node.js" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Sequelize" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="MySQL" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="GraphQL" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Apollo" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Mongoose" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="Handlebars" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="EJS" />
                        <ListItem
                            className="list-group-item list-group-item-action list-group-item-primary"
                            name="React" />
                    </div>
                </div>
            </div>
            <main className="about-wrapper">
                <section>
                    <aside>
                        <div>
                            <h1>A bit about me...</h1>
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
                            <a href="https://github.com/anthonyapicella/XP-pedia" target="_blank" rel="noopener noreferrer" className="row xp-link">GitHub Repository</a>
                            <a href="https://anthonyapicella.github.io/XP-pedia/" target="_blank" rel="noopener noreferrer" className="row xp-link">Web Application</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body descrip-holder">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Find the weather for any city in the world, save the city to your dashboard,
                                and view the weather at any time or find a new city.</p>
                        </div>
                        <ul className="list-group list-group-flush cards-list">
                            <li className="list-group-item">Weather Reports</li>
                            <li className="list-group-item">5 Day forecast</li>
                            <li className="list-group-item">Save favorite City</li>
                        </ul>
                        <div className="col card-body">
                            <a href="https://github.com/jpatterson933/weather-dashboard" target="_blank" rel="noopener noreferrer" className="row xp-link">Github Repository</a>
                            <a href="https://jpatterson933.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="row xp-link">Web Application</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body descrip-holder">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">A Blog where a user can create a profile, login and post and comment about anything.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush cards-list">
                            <li className="list-group-item">Unique Profile</li>
                            <li className="list-group-item">Encrypted Information</li>
                            <li className="list-group-item">Very Smooth Design</li>
                        </ul>
                        <div className="col card-body">
                            <a href="https://github.com/jpatterson933/tech-blog-version-1.0" target="_blank" rel="noopener noreferrer" className="row xp-link">Github Repository</a>
                            <a href="https://fast-lowlands-84430.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="row xp-link">Web Application</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}