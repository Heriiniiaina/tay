import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import {toast} from 'react-hot-toast';
const AddPatient = () => {
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [email,setEmail] = useState()
    const [departement,setDepartement] = useState()
    const [password,setPassword] = useState()
    const [phone,setPhone] = useState()
    const [birth,setBirth] = useState()
    const [image, setImage] = useState(null);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };
    const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:2000/api/patient/register",{nom,prenom,email,phone,password,birth},{
              
            })
            console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8eaf6', borderRadius: '8px', width: '100%', maxWidth: '500px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Patient</h2>
    <form onSubmit={onSubmit}>
      <TextField
        label="Nom"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={e=>setNom(e.target.value)}
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
       <TextField
        label="Prenom"
        onChange={e=>setPrenom(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
       <TextField
        label="Date de naissance"
        type="date"
        variant="outlined"
        onChange={e=>setBirth(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
     
      <TextField
        label="Email"
        onChange={e=>setEmail(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
      <TextField
        label="Mot de passae"
        type="password"
        onChange={e=>setPassword(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' }}
   
      />
     
     
      <TextField
        label="Phone"
        variant="outlined"
        onChange={e=>setPhone(e.target.value)}
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
     
      <Button variant="contained" type="submit" color="primary" fullWidth style={{ fontSize: '14px' }}>
        Add Patient
      </Button>
    </form>
  </div>
  );
};
 /*
       <TextField
        label="Date de naissance"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '15px', fontSize: '14px' }}
      />
      */
export default AddPatient;
