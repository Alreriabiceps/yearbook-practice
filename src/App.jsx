// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Login from './login/Login';
import Hero from './pages/Hero';
import DefaultLayout from './layouts/DefaultLayout';
import StudentLayout from './layouts/StudentLayout';

import Dashboard from './features/admin/general/Dashboard';
import StudentList from './features/admin/students/studentlist/StudentList';
import AddStudent from './features/admin/students/studentlist/AddStudent';
import ViewStudent from './features/admin/students/studentlist/ViewStudent';
import EditStudent from './features/admin/students/studentlist/EditStudent';

import LandingPage from './features/users/Dashboard/LandingPage';
import Yearbook from './features/users/Yearbook/pages/Yearbook';
import Criminology from './features/users/Yearbook/pages/Criminology';
import InformationSystem from './features/users/Yearbook/pages/InformationSystem';
import MarineEngineering from './features/users/Yearbook/pages/MarineEngineering';
import TourismManagement from './features/users/Yearbook/pages/TourismManagement';

function App() {
  return (
 
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/hero" element={<Hero />} />

        {/* Admin Routes */}
        <Route element={<DefaultLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="studentList" element={<StudentList />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="viewstudent" element={<ViewStudent />} />
          <Route path="students/edit/:studentId" element={<EditStudent />} />
        </Route>

        {/* Student Routes */}
        <Route element={<StudentLayout />}>
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="yearbook" element={<Yearbook />} />
          <Route path="criminology" element={<Criminology />} />
          <Route path="information-system" element={<InformationSystem />} />
          <Route path="tourism-management" element={<TourismManagement />} />
          <Route path="marine-engineering" element={<MarineEngineering />} />
        </Route>
      </Routes>
  
  );
}

export default App;
