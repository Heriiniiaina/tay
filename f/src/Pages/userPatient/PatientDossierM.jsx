// M O D U L E S
import React from 'react'


//C O M P O N E N T S
import NavBar from '../../components/NavBar/Nav.jsx';
import TableList from "../../components/TableList/TableList.jsx";
import PatientFicheM from './PatientFicheM.jsx';
import { IconButton } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility"

// S T Y L E
import "./Patient.css";
import "./PatientDossierM.css"

export default function PatientDossierM() {

    

  //------- DATA passer à Table List
  // Configuration table
  const columnsTableList = [
    { field: "referenceD", headerName: "Référence", width: 150 },
    { field: "Designation", headerName: "Designation", width: 220 },
    { field: "maladie", headerName: "Maladie", width: 200 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "doctor", headerName: "Reçu du Docteur", width: 230 },
    { field: "statutt", headerName: "Statut", width: 110 },
    { field: "option", headerName: "Option", width: 140, renderCell: (params) => {
        const clickBtnIcon = () => {
            // ID DE LA LIGNE CLIQUE : SIMON AAA, ALEFASO PROPS ANY AMLE PatientFicheM fotsiny données concernés nio id io
            console.log(params.row.id);

            //tmp
            document.querySelector(".contentTableList").style.display = "none";
            document.querySelector(".title").style.display = "none";
            document.querySelector(".contentFicheList").style.display = "block";
        };
        return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <IconButton onClick={clickBtnIcon} color='primary' aria-label="Ouvrir">
                <VisibilityIcon />
            </IconButton>
        </div>
        );
    }},

  ];
  // DATA à modifier en f* BD
  const elemntsTableList = [
    { id: 1, referenceD : "2210", Designation: "ECG et échodoplère", maladie: "Marary valahana", date: "2020-12-15", doctor : "Rasolofo Jeans boîte", statutt: "Fait"  },
    { id: 2, referenceD : "2211", Designation: "IRM cérébrale", maladie: "Tumeur maligne", date:"2022-01-24", doctor : "Rasolofo Jeans boîte", statutt: "Fait" },
    { id: 3, referenceD : "2212", Designation: "FCH Sortie d'hopital", maladie: "Tumeur", date:"2022-08-26", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 4, referenceD : "2213", Designation: "échodoplère", maladie: "Tumeur", date: "2022-11-17", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 5, referenceD : "2214", Designation: "échodoplère", maladie: "Tumeur", date: "2022-02-15", doctor : "Rasolofo Jeans boîte", statutt: "A faire" },
    { id: 6, referenceD : "2215", Designation: "échodoplère", maladie: "Tumeur", date: "2022-02-09", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 7, referenceD : "2216", Designation: "échodoplère", maladie: "Tumeur", date: "2023-03-02", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 8, referenceD : "2217", Designation: "échodoplère", maladie: "Tumeur", date: "2023-12-13", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 9, referenceD : "2218", Designation: "échodoplère", maladie: "Tumeur", date: "2024-09-21", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
    { id: 10, referenceD : "2219", Designation: "échodoplère", maladie: "Tumeur", date: "2024-01-30", doctor : "Rasolofo Jeans boîte", statutt: "Encours" },
  ];

  return (
    <>
      <div className="patientPageContainer">
        {/* navbar */}
        <div className="navBarContainer">
          <NavBar />
        </div>

        {/* content */}
        <div className="contentContainer">
          <h2 className="title">Mes Derniers documents </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='contentTableList'
              style={{
                width: "94%",
                marginTop: 30
              }}
            >
              <TableList
                Columns={columnsTableList}
                Arrows={elemntsTableList}
                Height={610}
                PageSizeOptions={[9, 16]}
              />
            </div>

            <div className='contentFicheList'
              style={{
                width: "94%",
                marginTop: 30
              }}
            >
                <PatientFicheM />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
