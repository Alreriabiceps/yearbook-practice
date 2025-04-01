import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import AddStudent from './admin/students/studentlist/AddStudent.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)
