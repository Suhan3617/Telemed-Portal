import { BrowserRouter as Router , Routes , Route , useLocation} from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";


function App() {
  // const location = useLocation();
  // const hidenavbar = ["/login", "/signup"].includes(window.location.pathname);
  return (
    <>
      <Navbar />
      {/* {!hidenavbar && <Navbar />} */}
      {/* 
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      */}
    </>
  );
}

export default App;
