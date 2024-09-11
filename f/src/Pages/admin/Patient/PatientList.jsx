import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
const PatientList = () => {
    const [patients,setPatients] = useState([])
 useEffect(()=>{
    try {
        const getDoctor = async ()=>{
            const doc = await axios.get("http://localhost:2000/api/patient/patients")
            console.log(doc)
            setPatients(doc.data.patient)
        }
        getDoctor()
        
    } catch (error) {
        
    }
    console.log(patients)
 },[])
 const delet = async (id)=>{
    
        const del = await axios.delete(`http://localhost:2000/api/patient/deletePat/${id}`)
        console.log(del)
        window.location.reload()
 }
 const handleDeleteClick = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this doctor?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => delet(id)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
    
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>PATIENT</h2>
      <input type="text" placeholder="Search" style={styles.searchInput} />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ padding: '10px' }}>#</th>
            <th style={{ padding: '10px' }}>Nom</th>
            <th style={{ padding: '10px' }}>Prenom</th>
            <th style={{ padding: '10px' }}>Department</th>
            <th style={{ padding: '10px' }}>Phone</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Options</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((doctor, index) => (
            <tr key={doctor.id}>
              <td style={{ padding: '10px' }}>{index + 1}</td>
              <td style={{ padding: '10px' }}>{doctor.nom} </td>
              <td style={{ padding: '10px' }}>{doctor.prenom}</td>
              <td style={{ padding: '10px' }}>{doctor.departement}</td>
              <td style={{ padding: '10px' }}>{doctor.phone}</td>
              <td style={{ padding: '10px' }}>{doctor.email}</td>
              <td>
               
                <button style={styles.deleteButton} onClick={e=>handleDeleteClick(doctor._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '10px',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  editButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    marginRight: '10px',
    border: 'none',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
  },
};

export default PatientList;
