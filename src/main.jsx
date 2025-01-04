// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'  // Make sure the extension is included
import './index.css'

// Add a console.log to verify the file is being executed
console.log('Main.jsx is running')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)