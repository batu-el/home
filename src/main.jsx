import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import Works from './pages/Works.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/works" replace />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<Navigate to="/works" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
