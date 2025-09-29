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
import PatientBookAppointment from "./pages/Patient/BookAppointment.jsx";
import PatientMedicalRecordspage from "./pages/Patient/PatientMedicalRecordspage.jsx";
import PatientProfilepage from "./pages/Patient/PatientProfilepage.jsx";
import PatientsAppointmentspage from "./pages/Patient/PatientsAppointmentspage.jsx";
import PatientsMessagespage from "./pages/Patient/PatientsMessagespage.jsx";


import DoctorDashboard from "./pages/Doctor/DoctorDashboard.jsx";
import Doctormessages from "./pages/Doctor/doctormessages.jsx";
import Doctorpatients from "./pages/Doctor/doctorpatients.jsx";
import Doctorappointments from "./pages/Doctor/doctorappointments.jsx";
import Doctorreports from "./pages/Doctor/doctorreports.jsx";
import Doctorsettings from "./pages/Doctor/doctorsettings.jsx";
import Doctorprescription from "./pages/Doctor/doctorwriteprescription.jsx";
import Doctorpatientprofile from "./pages/Doctor/doctorpatientprofile.jsx";


const Layout = ({ children }) => {
  const location = useLocation();

  const hidenavbarroutes = ["/signup" , "/login" , "/patientdashboard", "/patient/bookappointment", "/patient/appointments", "/patient/messages" , "/patient/medicalrecords" , "/patient/profile" ,"/doctor/overview" , "/doctor/messages" , "/doctor/patients" , "/doctor/appointments" , "/doctor/records" , "/doctor/settings" , "/doctor/prescription" , "/doctor/patients/:patientId" , "/doctor/consultation" ];



  const shouldhidenavbar =
    hidenavbarroutes.includes(location.pathname) ||
    location.pathname.startsWith("/doctor/patients/"); // 👈 dynamic match

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
            <Route path="/patient/bookappointment" element={<PatientBookAppointment />} />
            <Route path="/patient/appointments" element={<PatientsAppointmentspage />} />
            <Route path="/patient/messages" element={<PatientsMessagespage />} />
            <Route path="/patient/medicalrecords" element={<PatientMedicalRecordspage />} />
            <Route path="/patient/profile" element={<PatientProfilepage />} />
            <Route path="/doctor/overview" element={<DoctorDashboard />} />
            <Route path="/doctor/messages" element={<Doctormessages />} />
            <Route path="/doctor/patients" element={<Doctorpatients />} />
            <Route path="/doctor/appointments" element={<Doctorappointments />} />
            <Route path="/doctor/records" element={<Doctorreports />} />
            <Route path="/doctor/settings" element={<Doctorsettings />} />
            <Route path="/doctor/prescription" element={<Doctorprescription />} />
            <Route path="/doctor/patients/:patientId" element={<Doctorpatientprofile />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
