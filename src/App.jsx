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
import PatientDashboard from "./pages/Patient/PatientDashboard.jsx";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard.jsx";
import Doctormessages from "./pages/Doctor/doctormessages.jsx";
import Doctorpatients from "./pages/Doctor/doctorpatients.jsx";
import Doctorappointments from "./pages/Doctor/doctorappointments.jsx";
import Doctorreports from "./pages/Doctor/doctorreports.jsx";
import Doctorsettings from "./pages/Doctor/doctorsettings.jsx";
import Doctorprescription from "./pages/Doctor/doctorwriteprescription.jsx";

const Layout = ({ children }) => {
  const location = useLocation();

  const hidenavbarroutes = ["/signup" , "/login" , "/patientdashboard", "/doctor/overview" , "/doctor/messages" , "/doctor/patients" , "/doctor/appointments" , "/doctor/records" , "/doctor/settings" , "/doctor/prescription" ];

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
            <Route path="/doctor/overview" element={<DoctorDashboard />} />
            <Route path="/doctor/messages" element={<Doctormessages />} />
            <Route path="/doctor/patients" element={<Doctorpatients />} />
            <Route path="/doctor/appointments" element={<Doctorappointments />} />
            <Route path="/doctor/records" element={<Doctorreports />} />
            <Route path="/doctor/settings" element={<Doctorsettings />} />
            <Route path="/doctor/prescription" element={<Doctorprescription />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
