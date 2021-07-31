import React from 'react'
import './projects-page.styles.css';
import DetailsCard from '../../components/card/card.component';
import { Link } from 'react-router-dom';
import CovidImg from "../../assets/images/covid.jpg";
import TicTacToeImg from "../../assets/images/tic-tac-toe.jpg"

const projects = [
    {
        "name": "Tic tac toe",
        "profile-pic-url": TicTacToeImg,
        "local": true
    },
    {
        "name": "Covid stats",
        "profile-pic-url": CovidImg,
        "git-link": "https://github.com/aniruddhupparna/covid-dashboard",
        "local": false,
        "card-links": [{'url': "https://github.com/aniruddhupparna/covid-dashboard", 'text': "Github"},
                        {'url': "https://aniruddhupparna.github.io/covid-dashboard", 'text': "Demo"}]
    }
];


const ProjectsPage = () =>
    (<div className="projects-page-conatiner">
       <div className="projects-title">
            <div className="line-animation">PROJECTS</div>
        </div>
       <div className="cards-container">
           {projects.map(project => 
            project.local ?
                (<Link to={`/goodie-bag-studio/projects/${project.name}`}>
                    <DetailsCard title={project.name} image={project['profile-pic-url']} cardLinks={[{'url': project['git-link'], 'text': "Github"}]}/>
                </Link>):
                (<DetailsCard title={project.name} image={project['profile-pic-url']} cardLinks={project['card-links']}/>)
           )}
       </div>

    </div>)

export default ProjectsPage