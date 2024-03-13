import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/register";
import Error from "./components/Error";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/home" element={<LoginForm />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
