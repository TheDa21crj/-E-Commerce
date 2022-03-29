import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Admin from "./Pages/Admin";

import Layout from "./Pages/Layout";

function App() {
    return ( <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/admin"
        element = { < Admin / > }
        /> <
        Route path = "*"
        element = { < Error / > }
        /> <
        /Routes> <
        /Layout>
    );
}

export default App;