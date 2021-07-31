import React from 'react'
import './project-details-page.styles.css';
import DetailsCard from '../../components/card/card.component';
import { Link } from 'react-router-dom';

const projects = [
    {
        "name": "Tic tac toe"
    }
];


const ProjectDetailsPage = ({title}) =>
    (<div className="project-details-page-conatiner">
       <div className="project-title">
            <div className="line-animation">{title}</div>
        </div>
       <div className="project-container">
       </div>
    </div>)

export default ProjectDetailsPage