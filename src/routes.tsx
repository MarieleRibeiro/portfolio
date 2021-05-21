import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Portfolio } from "./pages/Portfolio";
import { AboutMe } from "./pages/AboutMe";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/AboutMe" component={AboutMe} />
      </Switch>
    </BrowserRouter>
  );
}
