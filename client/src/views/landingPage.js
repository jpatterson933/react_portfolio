import React from 'react';
import { ListItem } from '../components/List/ListItem';
import { Button } from '../components/Button/Button';
import { Link } from '../components/Link';

export const LandingPage = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" id="nav">
                <div className="button-flex">
                    <Button className="btn btn-dark row-3"><Link url="#projects-id-link" linkTitle="Check Out My Applications" /></Button>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="name">Jeffery W. Patterson</h1>
                    <Link
                        url="https://www.instagram.com/i_shred/"
                        newWindow="_blank"
                        linkTitle={<img className="profile-photo col-sm-3" src="../../assets/profile_photo.jpg" alt="Jeffery Patterson"></img>}
                    />
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="https://github.com/jpatterson933" linkTitle="Github" newWindow="_blank" /></Button>
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="https://www.linkedin.com/in/jefferywpatterson/" linkTitle="LinkedIn" newWindow="_blank" /></Button>
                    <Button className="btn btn-dark col-md-3 col-sm-12"><Link url="assets/media/my-resume-6.7.pdf" download linkTitle="Resume"></Link></Button>
                    <ul className="col-sm-3 col-xs-12 contact-info">
                        <ListItem name={<Link url="mailto: jpatterson933@ucla.edu?subject=I want to hire you!" linkTitle="jpatterson933@ucla.edu" />}></ListItem>
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
                                linkTitle="Github Repository"
                                newWindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://anthonyapicella.github.io/XP-pedia/"
                                linkTitle="Live Web Application"
                                newWindow="_blank"
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
                                linkTitle="Github Repository"
                                newWindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://jpatterson933.github.io/weather-dashboard/"
                                linkTitle="Web Application"
                                newWindow="_blank"
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
                                linkTitle="Github Repository"
                                newWindow="_blank"
                            />
                            <Link
                                className="row xp-link"
                                url="https://fast-lowlands-84430.herokuapp.com/"
                                linkTitle="Web Application"
                                newWindow="_blank"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}