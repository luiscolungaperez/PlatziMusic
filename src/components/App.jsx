import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ViewGeneral from "../views/ViewGeneral";
import Componente from "./Componente";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ViewGeneral} />
      <Route exact path="/componente" component={Componente} />
    </Switch>
  </BrowserRouter>
);

export default App;
