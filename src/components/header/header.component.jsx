import React from 'react'
import './header.styles.css';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import Logo from '../../assets/images/gb-logo-dark.jpg';
import TimelineIcon from '@material-ui/icons/Timeline';

import {Link} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const navLinks = [
    {name: 'Projects', icon: <CodeIcon/>, route: '/goodie-bag-studio/projects'},
    {name: 'Bots', icon: <SettingsIcon/>, route: '/goodie-bag-studio/bots'},
    {name: 'Dev Roadmap', icon: <TimelineIcon/>, route: 'goodie-bag-studio/dev-roadmap'},
    {name: 'About', icon: <InfoIcon/>, route: '/goodie-bag-studio/about'}
]

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((item) => (
           <Link to={item.route}>
            <ListItem button key={item.name}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className="header">
        <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
        </Drawer>
        <div className="logo-container">
            <img src={Logo} alt="goodie bag logo" className="logo"/>
        </div>
        <div className="title-container">GOODIE BAG STUDIO</div>
    </div>
  );
}