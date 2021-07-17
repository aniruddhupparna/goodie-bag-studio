// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/header.component';
import Projects from './pages/projects-page/projects-page.component';
import BotsPage from './pages/bots-page/bots-page.component';
import AboutPage from './pages/about-page/about-page.component';
import LandingPage from './pages/landing-page/landing-page.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/goodie-bag-studio/bots" component={BotsPage} />
          <Route path="/goodie-bag-studio/about" component={AboutPage} />
          <Route path="/goodie-bag-studio/projects" component={Projects} />
          <Route exact path="/goodie-bag-studio/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
