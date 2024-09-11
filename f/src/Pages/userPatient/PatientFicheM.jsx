import React from 'react'

import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { useNavigate } from 'react-router-dom';

import "./Patient.css"
import "./PatientFicheM.css";

export default function PatientFicheM() {
    let navigate = useNavigate();
  return (
    <>
      <div className="sectionEntete">
        <div className="pdp">PDP</div>
        <div style={{ marginLeft: 40 }}>
          <h2 style={{ color: "var(--noirbe)" }}>ECG et échodoplère</h2>
          {/* decription */}
          <p style={{ fontSize: 15, width: 600, color: "var(--noirbe)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            asperiores voluptatum rerum iusto blanditiis molestias.
          </p>
        </div>
        <Button onClick={ () => {
          //-------T M P
          document.querySelector(".contentTableList").style.display = "block";
          document.querySelector(".title").style.display = "block";
          document.querySelector(".contentFicheList").style.display = "none";
        }} sx={{textTransform: "none", marginTop: 2.4, marginLeft: 7}} variant="contained" startIcon={<ArrowBackIosIcon/>}>Retour</Button>
      </div>
      <div className="ContainerOfFicheM">
        <div className="gaucheContainer">
            <ul>
                <li><a className='active' href="#">Maladies et Sujets de santé</a></li>
                <li><a href="#">Traitement</a></li>
                <li><a href="#">Mesures</a></li>
                
            </ul>
        </div>
        <div className="droiteContainer">
          <h1>Mba farano ito page ito ry von atody isany eeee</h1>
        </div>
      </div>
    </>
  );
}
