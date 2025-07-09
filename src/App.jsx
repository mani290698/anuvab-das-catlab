import { React, useEffect } from "react";
import { BrowserRouter as Router, useLocation ,Routes, Route } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css';
import Home from '../src/pages/Home/Home.jsx';
import Team from '../src/pages/Team/Team';
import Research from '../src/pages/Research/Research';
import Publications from '../src/pages/Publications/Publications';
import FullProfile from '../src/pages/Profile/Profile';
import Resource from '../src/pages/Resources/Resource';
import JoinUs from '../src/pages/Join Us/JoinUs';
import './index.css';

function App() {

  return (
    <Router>
      <PageTransition />
    </Router>
  );
}

function PageTransition() {
  const location = useLocation(); // useLocation hook is now inside the Router

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname} // Ensure each transition is unique using location.key
        timeout={500} // Set the transition duration (500ms)
        classNames="page-fade" // The CSS class name for the transition
      >
        <div className="route-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/anuvab" element={<FullProfile />} />
            <Route path="/resources" element={<Resource />} />
          </Routes> 
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
