import { React, useEffect } from "react";
import { BrowserRouter  as Router, useLocation } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css'; 

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
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Ensure each transition is unique using location.key
        timeout={500} // Set the transition duration (500ms)
        classNames="page-fade" // The CSS class name for the transition
      >
        <div>
          <AppRouter location={location} />{" "}
          {/* Pass the location prop to AppRouter */}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
