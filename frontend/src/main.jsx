import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline/>
    <App />
    </>
)
