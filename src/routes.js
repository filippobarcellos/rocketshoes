import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

<<<<<<< HEAD
const Routes = () => {
=======
export default function Routes() {
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
<<<<<<< HEAD
};

export default Routes;
=======
}
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
