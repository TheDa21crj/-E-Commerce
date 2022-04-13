import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import Error from "./Pages/Error";
import AdminLogin from "./Pages/AdminLogin";
import PostContent from "./Pages/PostContent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/post-content" element={<PostContent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
