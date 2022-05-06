import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Card from './Pages/Card'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="*" element={<h1> não encontrado</h1>} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
)
