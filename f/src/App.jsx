
//pages

import PatientPage from "./Pages/userPatient/Patient.jsx"
import DoctorPage from "./Pages/userDoctor/Doctor.jsx"
import Admin from "./Pages/admin/Admin.jsx"
import PatientDossierM from "./Pages/userPatient/PatientDossierM.jsx"

//style 
import "./App.css"

import LoginAdmin from "./Pages/Login/AdminLogin.jsx"
import LoginUser from './Pages/Login/LoginUser.jsx'

let AppLog = ()=> {

  return (
    <LoginAdmin />
  )
}

let AppUserLog = () => {
  return (
    <LoginUser />
  )
}


//After LOG
let AppPatientPage = () => {
  return (
    <PatientPage/>
  )
}

let AppPatientDossierM = () => {
  return (
    <PatientDossierM/>
  )
}

let AppDoctorPage = () => {
  return (
    <DoctorPage />
  )
}

let AppAdminPage = () => {
  return (
    <Admin />
  )
}

let AppMain = ()=> {

  return (
    <>
      <p>je suis main</p>
    </>
  )
}


export default {
  AppLog,
  AppUserLog,
  AppMain,
  AppPatientPage,
  AppDoctorPage,
  AppAdminPage,
  AppPatientDossierM,
};
