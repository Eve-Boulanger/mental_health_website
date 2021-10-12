
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Activities } from "./components/Pages/Activities";
import { Resources } from "./components/Pages/Resources/Resources";
import { Support } from "./components/Pages/Support";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activities" component={Activities} />
            <Route path="/resources" component={Resources} />
            <Route path="/support" component={Support} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;