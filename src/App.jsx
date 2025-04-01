import React from 'react';
import { Routes, Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Hero from './pages/Hero';
import Login from './login/Login';
import Dashboard from './admin/general/Dashboard';
import StudentList from './admin/students/studentlist/StudentList';
import AddStudent from './admin/students/studentlist/AddStudent.jsx';
import ViewStudent from './admin/students/studentlist/ViewStudent.jsx';
import EditStudent from './admin/students/studentlist/EditStudent.jsx';

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
      </Routes>
    </div>
  );
}

export default App;