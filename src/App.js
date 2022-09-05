import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import main from "./main";
import App2 from "./App2";
import App3 from "./App3";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={main} />
          <Route path="/app2" component={App2} />
          <Route path="/app3" component={App3} />
          <Route path="/main" component={main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
