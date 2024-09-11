import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import {BiPencil,BiTrashAlt} from "react-icons/bi"
import axios from 'axios';
import {toast} from 'react-hot-toast';
const AddDoctor = () => {
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [email,setEmail] = useState()
    const [departement,setDepartement] = useState()
    const [password,setPassword] = useState()
    const [phone,setPhone] = useState()
    const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:2000/api/user/doctor/add",{nom,prenom,email,phone,password,departement})
            console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8eaf6',gridArea: 'doc', borderRadius: '8px', width: '100%',marginRight:"20px", maxWidth: '500px',height:"80vh",overflowY:"scroll" }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Doctor</h2>
    <form onSubmit={onSubmit}>
      <TextField
        label="Nom"
        variant="outlined"
        fullWidth
        margin="normal"
        
        onChange={e=>setNom(e.target.value)}
        style={{ marginBottom: '15px', fontSize: '14px' ,width:200}}
      />
       <TextField
        label="Prenom"
        onChange={e=>setPrenom(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px',width:200 }}
      />
     
      <TextField
        label="Email"
        onChange={e=>setEmail(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' ,width:200}}
      />
      <TextField
        label="Mot de passe"
        type="password"
        onChange={e=>setPassword(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' ,width:200}}
        placeholder="(Optional)"
      />
      <TextField
        label="Department"
        onChange={e=>setDepartement(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' ,width:200}}
        placeholder="(Optional)"
      />
       
     
      <TextField
        label="Phone"
        variant="outlined"
        onChange={e=>setPhone(e.target.value)}
        fullWidth
        margin="normal"
        style={{ marginBottom: '15px', fontSize: '14px' ,width:200}}
      />
     
      <Button variant="contained" type="submit" color="primary" fullWidth style={{ fontSize: '14px' }}>
        Add Doctor
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
export default AddDoctor;
