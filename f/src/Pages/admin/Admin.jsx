import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./Admin.css"


// a remplace NAV BAR TMP
import DoctorList from './DoctorList.jsx'
import AddDoctor from './AddDoctor.jsx'
import NavBar from '../../components/NavBar/Nav.jsx'
import PatientList from './Patient/PatientList.jsx'
import AddPatient from './Patient/AddPatient.jsx'


let Admin = () => {
  const navigate = useNavigate()
  useEffect (()=>{
    const admin = JSON.parse(sessionStorage.getItem("user"))
    if(!admin)
       return navigate("/")
  })
  const doctors = [
    { id: 1, name: 'Peter David', department: 'Optometrist', phone: '0912893402', email: 'peterdavid@gmail.com' },
    { id: 2, name: 'Troy Bolton', department: 'Medicine', phone: '09139124809', email: 'caladams@gmail.com' },
    { id: 3, name: 'Cally Andrews', department: 'Admin', phone: '0912893402', email: 'callyandrews@gmail.com' },
    { id: 4, name: 'Lauretta Sam', department: 'Optometrist', phone: '07029834921', email: 'laurettasam@gmail.com' },
    { id: 5, name: 'Akalezi Kelechi', department: 'Surgery', phone: '0912893402', email: 'akalezikelechi@gmail.com' },
  ];

  return (
    <div className="AdminPageContainer">
      {/* navbar */}
        <div className="logo">
          <p>+</p>
        </div>
        <NavBar/>
      {/* content */}
      <div className="contentContainer" >
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Couleur de fond optionnelle
      }}
    >
      <div style={{ display: 'flex' ,alignItems:"center", gap: '30px' }}>
        <DoctorList />
        <AddDoctor />
      </div>
    </div>
      </div>
    </div>
  );
}

export default Admin
