import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import App from './App.jsx';
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from './Auth/AuthContext.jsx';
import PrivateRoute from './Auth/PrivateRoute.jsx'; 
import ProtectedRoute from './Auth/ProtectedRoute.jsx';
import AdminDoctor from './Pages/admin/AdminDoctor.jsx';
import AdminPatient from './Pages/admin/AdminPatient.jsx';

const route = createBrowserRouter([
  {
    path: '/auth',
    element: 
    

      <App.AppLog />,
  
  },
  {
    path: '/auth_user',
    element: 
    

      <App.AppUserLog />,

    
  },
  {
    path: '/',
    element: <Navigate to="/auth_user" replace />,
  },
  {
    path: '/user&doc',
    element: (
   
   

      <App.AppDoctorPage />
    

      
    ),
  },
  {
    path: '/user&patient',
    element: (
      

        <App.AppPatientPage />
    
      
    ),
  },
  {
    path : "/user&patient/dossier&medical",
    element : <App.AppPatientDossierM/>
  },
  {
    path: '/admin',
    element: (
        <App.AppAdminPage />
    ),
   
  },
  {
    path: "/admin/doctor",
    element:<AdminDoctor/>
  },
  {
    path: "/admin/patient",
    element:<AdminPatient/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Toaster />
      <RouterProvider router={route} />
    
  </StrictMode>,
);
