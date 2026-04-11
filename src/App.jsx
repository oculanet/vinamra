import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Projects />} />
    </Routes>
  )
}
