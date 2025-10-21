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
import Patientdoctor from "./pages/Patient/patientdoctor.jsx";
import PatientAppointmentDetails from "./pages/Patient/PatientAppointmentDetails.jsx";
import Patientsettings from "./pages/Patient/patientsettings.jsx";
import Patientdoctordetails from "./pages/Patient/PatientDoctorDetails.jsx";


import DoctorDashboard from "./pages/Doctor/DoctorDashboard.jsx";
import Doctormessages from "./pages/Doctor/doctormessages.jsx";
import Doctorpatients from "./pages/Doctor/doctorpatients.jsx";
import Doctorappointments from "./pages/Doctor/doctorappointments.jsx";
import Doctorreports from "./pages/Doctor/doctorreports.jsx";
import Doctorsettings from "./pages/Doctor/doctorsettings.jsx";
import Doctorprescription from "./pages/Doctor/doctorwriteprescription.jsx";
import Doctorpatientprofile from "./pages/Doctor/doctorpatientprofile.jsx";
import DoctorLayout from "./layout/doctorlayout.jsx";
import DoctorConsultation from "./pages/Doctor/doctorconsultation.jsx";
import ProfileSettings from "./components/Doctor/profile_settings_page/profile_settings.jsx";
import TeleconsultationSettings from "./components/Doctor/profile_settings_page/teleconsulationsettings.jsx";
import NotificationPreferences from "./components/Doctor/profile_settings_page/notifications_prefercences.jsx";
import SystemPreferences from "./components/Doctor/profile_settings_page/system_prefernces.jsx";
import SettingsContainer from "./pages/Doctor/doctorprofilesettings.jsx";
// Layout for Navbar hiding logic
const Layout = ({ children }) => {
  const location = useLocation();

  const hidenavbarroutes = [
    "/signup",
    "/login",
    "/patientdashboard",
    "/patient/bookappointment",
    "/patient/appointments",
    "/patient/messages",
    "/patient/medicalrecords",
    "/patient/profile",
    "/patient/doctors",
    "/patient/settings",
  ];

  const dynamicRoutes = [
    "/doctor/",
    "/patient/appointmentdetails/",
    "/book-appointment/",
    "/patient/doctors/",
  ];

  const shouldhidenavbar =
    hidenavbarroutes.includes(location.pathname) ||
    dynamicRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
      {!shouldhidenavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Patient Routes (same as before) */}
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route
            path="/patient/appointments"
            element={<PatientsAppointmentspage />}
          />
          <Route
            path="/patient/appointmentdetails/:id"
            element={<PatientAppointmentDetails />}
          />
          <Route path="/patient/doctors" element={<Patientdoctor />} />
          <Route
            path="/patient/doctors/:id"
            element={<Patientdoctordetails />}
          />
          <Route
            path="/book-appointment/:doctorId"
            element={<PatientBookAppointment />}
          />
          <Route path="/patient/messages" element={<PatientsMessagespage />} />
          <Route
            path="/patient/medicalrecords"
            element={<PatientMedicalRecordspage />}
          />
          <Route path="/patient/profile" element={<PatientProfilepage />} />
          <Route path="/patient/settings" element={<Patientsettings />} />

          {/* Doctor Routes inside DoctorLayout */}

          <Route
            path="/doctor/overview"
            element={
              <DoctorLayout>
                <DoctorDashboard />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/appointments"
            element={
              <DoctorLayout>
                <Doctorappointments />
              </DoctorLayout>
            }
          />

          <Route
            path="/doctor/patients"
            element={
              <DoctorLayout>
                <Doctorpatients />
              </DoctorLayout>
            }
          />

          <Route
            path="/doctor/messages"
            element={
              <DoctorLayout>
                <Doctormessages />
              </DoctorLayout>
            }
          />

          <Route
            path="/doctor/reports"
            element={
              <DoctorLayout>
                <Doctorreports />
              </DoctorLayout>
            }
          />

          {/* <Route
            path="/doctor/settings"
            element={
              <DoctorLayout>
                <Doctorsettings />
              </DoctorLayout>
            }
          /> */}
          <Route
            path="/doctor/settings"
            element={
              <DoctorLayout>
                <SettingsContainer />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/prescription"
            element={
              <DoctorLayout>
                <Doctorprescription />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/consultation"
            element={
              <DoctorLayout>
                <DoctorConsultation />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/settings/profile"
            element={
              <DoctorLayout>
                <ProfileSettings />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/settings/notificationspreferences"
            element={
              <DoctorLayout>
                <NotificationPreferences />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/settings/teleconsultation"
            element={
              <DoctorLayout>
                <TeleconsultationSettings />
              </DoctorLayout>
            }
          />
          <Route
            path="/doctor/settings/system"
            element={
              <DoctorLayout>
                <SystemPreferences />
              </DoctorLayout>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
