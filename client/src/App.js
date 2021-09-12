
function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-dark bg-dark" id="nav">
        <div class="button-flex">
            <button class="btn btn-dark row-3"><a href="#projects-id-link">Check Out My Applications!</a></button>
        </div>
    </nav>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4" id="name">Jeffery W. Patterson</h1>
            <a href="https://www.instagram.com/i_shred/" target="_blank">
                <img class="profile-photo col-sm-3" src="../../assets/profile_photo.jpg" alt="Picture of Jeffery Patterson"></img>
            </a>
            <button class="btn btn-dark col-md-3 col-sm-12"><a href="https://github.com/jpatterson933" target="_blank">Github</a></button>
            <button class="btn btn-dark col-md-3 col-sm-12"><a href="https://www.linkedin.com/in/jefferywpatterson/" target="_blank">LinkedIn</a></button>
            <button class="btn btn-dark col-md-3 col-sm-12"><a href="assets/media/my-resume-6.7.pdf" download>Resume</a></button>
            <ul class="col-sm-3 col-xs-12 contact-info">
                <li><a href="mailto: jpatterson933@ucla.edu?subject=I just viewed your portfolio!">jpatterson933@ucla.edu</a></li>
                <li id="cell">(951) 581-6263</li>
            </ul>
            <div class="list-group" id="skills">
                <a class="list-group-item list-group-item-action"><b>Languages</b></a> 
                <a class="list-group-item list-group-item-action list-group-item-primary">HTML</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">CSS</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">Javscript and Jquery</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">Bootstrap</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">Node.js</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">Sequelize</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">MySQL / Mongo DB</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">Handlebars</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">React</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">EJS</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">GraphQL</a>
                <a class="list-group-item list-group-item-action list-group-item-primary">react-apollo / apollo-boost</a>
            </div>
        </div>
    </div>
    <main class="about-wrapper">
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

        <h1 class="row justify-content-center" id="projects-id-link">My Applications</h1>
        <div class="row">
            <div class="card" >
                <div class="card-body descrip-holder">
                    <h5 class="card-title">Xp-Pedia</h5>
                    <p class="card-text">Create a username, find any game in the world and save it to your profile!
                         Work the time it takes to beat a game, into your 9-5 schedule.
                    </p>
                </div>
                <ul class="list-group list-group-flush cards-list">
                    <li class="list-group-item">Find any Game in the world</li>
                    <li class="list-group-item">Find Game Completion Time</li>
                    <li class="list-group-item">Beat that game</li>
                </ul>
                <div class="col">
                    <a href="https://github.com/anthonyapicella/XP-pedia" target="_blank" class="row xp-link">GitHub Repository</a>
                    <a href="https://anthonyapicella.github.io/XP-pedia/" target="_blank" class="row xp-link">Web Application</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body descrip-holder">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">Find the weather for any city in the world, save the city to your dashboard,
                        and view the weather at any time or find a new city.</p>
                </div>
                <ul class="list-group list-group-flush cards-list">
                    <li class="list-group-item">Weather Reports</li>
                    <li class="list-group-item">5 Day forecast</li>
                    <li class="list-group-item">Save favorite City</li>
                </ul>
                <div class="col card-body">
                    <a href="https://github.com/jpatterson933/weather-dashboard" target="_blank" class="row xp-link">Github Repository</a>
                    <a href="https://jpatterson933.github.io/weather-dashboard/" target="_blank" class="row xp-link">Web Application</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body descrip-holder">
                    <h5 class="card-title">Tech Blog</h5>
                    <p class="card-text">A Blog where a user can create a profile, login and post and comment about anything.
                    </p>
                </div>
                <ul class="list-group list-group-flush cards-list">
                    <li class="list-group-item">Unique Profile</li>
                    <li class="list-group-item">Encrypted Information</li>
                    <li class="list-group-item">Very Smooth Design</li>
                </ul>
                <div class="col card-body">
                    <a href="https://github.com/jpatterson933/tech-blog-version-1.0" target="_blank" class="row xp-link">Github Repository</a>
                    <a href="https://fast-lowlands-84430.herokuapp.com/" target="_blank" class="row xp-link">Web Application</a>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
