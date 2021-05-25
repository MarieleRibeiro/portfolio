import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Projects } from "./pages/Portfolio";
import { About } from "./pages/Profile";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
