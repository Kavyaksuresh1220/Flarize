import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";
import EditLead from "./pages/EditLead";


function App() {
 

  return (
    <>
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/leads" element={<Leads />} />

      <Route path="/add-lead" element={<AddLead />} />

      <Route path="/edit-lead" element={<EditLead />} />

    </Routes>
      
    </>
  )
}

export default App
