import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Messenger from "./pages/Messenger/Messenger";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  //Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {
          user ? <Home /> : <Register />
        }>
        </Route>
        <Route path = "/login" element = {
          /*user ? <Navigate to = "/"/> : */<Login />
        }>
        </Route>
        <Route path = "/register" element = {
          /*user ? <Navigate to="/"/> :*/ <Register/>
        }>
        </Route>
        <Route path = "/messenger" element = {
          /*user ? <Navigate to="/"/> :*/ <Messenger/>
        }>
        </Route>
        <Route path = "/profile/:username" element = {
          user ? <Profile/> : <Navigate to = "/register"/>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
