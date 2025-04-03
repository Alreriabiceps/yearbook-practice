import React from 'react';
import { Routes, Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Hero from './pages/Hero';
import Login from './login/Login';
import Dashboard from './features/admin/general/Dashboard';
import StudentList from './features/admin/students/studentlist/StudentList';
import AddStudent from './features/admin/students/studentlist/AddStudent.jsx';
import ViewStudent from './features/admin/students/studentlist/ViewStudent.jsx';
import EditStudent from './features/admin/students/studentlist/EditStudent.jsx';
import LandingPage from './features/users/Dashboard/LandingPage.jsx';
import ClassGallery from './features/users/Yearbook/ClassGallery.jsx';
import StudentLayout from './layouts/StudentLayout.jsx';
import InformationSystem from './features/users/Yearbook/pages/InformationSystem.jsx';
import Criminology from './features/users/Yearbook/pages/Criminology.jsx';
import MarineEngineering from './features/users/Yearbook/pages/MarineEngineering';
import TourismManagement from './features/users/Yearbook/pages/TourismManagement.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="hero" element={<Hero />} />
        <Route element={<DefaultLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="studentList" element={<StudentList />} />
          <Route path="viewstudent" element={<ViewStudent />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="students/edit/:studentId" element={<EditStudent />} /> {/* Fixed route */}
        </Route>
        <Route element={<StudentLayout />} >
        <Route path="landingpage" element={<LandingPage />} />
        <Route path="class-gallery" element={<ClassGallery />} />
        <Route path="information-system" element={<InformationSystem />} />
        <Route path="criminology" element={<Criminology />} />
        <Route path="marine-engineering" element={<MarineEngineering />} />
        <Route path="tourism-management" element={<TourismManagement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;