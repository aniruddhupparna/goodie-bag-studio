import React from 'react'
import './landing-page.styles.css';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/gb-logo-dark.jpg';
import { Link } from 'react-router-dom';
// import LandingBg from '../../assets/landing-bg.jpg';

const LandingPage = () =>
    (<div className="landing-page-container">
      <div className="landing-upper">
          <div className="landing-logo-container">
            <img src={Logo} alt="goodie bag logo" className="goodie-bag-logo"/>
          </div>
          <div className="landing-title">GOODIE BAG STUDIO</div>
      </div>
      <div className="landing-lower">
        <div className="landing-btn-container">
        <Link to="/projects">
          <Button variant="contained" color="primary">
            View projects
          </Button>
        </Link>
        </div>
      </div>
    </div>)

export default LandingPage