import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import NavbarComp from "./components/NavBar";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";

function App() {
  const isLoggedIn = Cookies.get("isLoggedIn") === "true";

  useEffect(() => {
    console.log("Aplikasi dimuat!");
  }, []);

  const handleLogin = () => {
    Cookies.set("isLoggedIn", "true", { expires: 7 });
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    window.location.reload();
  };

  return (
    <Router>
      <div>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <AuthenticatedApp onLogout={handleLogout} />}
      </div>
    </Router>
  );
}

function AuthenticatedApp({ onLogout }) {
  return (
    <>
      <NavbarComp onLogout={onLogout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
