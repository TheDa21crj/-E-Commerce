import { Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Layout>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="">
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
