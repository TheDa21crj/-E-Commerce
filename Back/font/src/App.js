import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error_404 from "./Pages/Error";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="">
            <Error_404 />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
