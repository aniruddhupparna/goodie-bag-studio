import React from 'react'
import './landing-page.styles.css';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/gb-logo-dark.jpg';
import { Link } from 'react-router-dom';
// import LandingBg from '../../assets/images/landing-bg.jpg';
import TypeAnim from '../../components/type-anim/type-anim.component';

const greetingText = [
  "HI THERE!,", 
"THIS IS GOODIE BAG STUDIO", 
"CHECK OUT OUR WORK USING VIEW PROJECTS BELOW"
]

const LandingPage = () =>
    (<div className="landing-page-container">
          <div className="landing-logo-container">
            <img src={Logo} alt="goodie bag logo" className="goodie-bag-logo"/>
          </div>
          <TypeAnim textList = {greetingText} typingInterval={120}/>
        <div className="landing-btn-container">
        <Link to="/goodie-bag-studio/projects">
          <Button variant="contained" color="primary">
            View projects
          </Button>
        </Link>
      </div>
    </div>)

export default LandingPage