import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Projects } from "./pages/Portfolio";
import { AboutMe } from "./pages/AboutMe";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/aboutMe" component={AboutMe} />
      </Switch>
    </BrowserRouter>
  );
}
