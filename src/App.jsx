import React from 'react';
import { Routes, Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Hero from './pages/Hero';
import Login from './login/Login';
import Dashboard from './admin/general/Dashboard';
import StudentList from './admin/students/studentlist/StudentList';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Hero' element={<Hero />} />
        <Route element={<DefaultLayout />}>
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='StudentList' element={<StudentList />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;