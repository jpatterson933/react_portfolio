import React from 'react';
import { LanguageSlider } from '../components/LanguageSlider';

import { ListItem } from '../components/List/ListItem';
import { Button } from '../components/Button/Button';
import { Link } from '../components/Link';
import { Card } from '../components/Card';

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
                    <Card />
                </div>
            </main>
        </div>
    )
}