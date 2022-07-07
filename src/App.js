import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Otherpage from "./Otherpage";
import MainComponent from "./MainComponent";
import "./App.css";
function App() {
  return (
    <Router>
      <Fragment>
        <header className="header">
          <div>This is a multicontainer application</div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div className="main">
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/otherpage" component={Otherpage} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
