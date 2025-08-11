import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";

const Layout = ({ children }) => {
  const location = useLocation();

  const hidenavbarroutes = ["/signup" , "/login" , "/patientdashboard"];

  const shouldhidenavbar = hidenavbarroutes.includes(location.pathname);

  return (
    <>
      {!shouldhidenavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
