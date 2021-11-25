import { BrowserRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./../src/pages/Home/Home";
import HomeDetali from "./pages/Home/HomeDetail";

function Root() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />\
          <Route exact path="/detail" component={HomeDetali} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default Root;
