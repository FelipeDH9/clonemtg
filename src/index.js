import React from 'react'
import ReactDOM from 'react-dom/client'

// styles
import './styles/global.css'

// pages
import Home from './Pages/Home'
import Card from './Pages/Card'
import LifeCount from './Pages/LifeCount'

// components
import LayoutComponent from './components/Layout'
import Navbar from './components/Navbar'

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SearchContextProvider } from './context/SearchContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <SearchContextProvider>
        <LayoutComponent>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/card/:id" element={<Card />} />
            <Route path="/lifecount" element={<LifeCount />} />
            <Route path="*" element={<h1> não encontrado</h1>} />
          </Routes>
        </LayoutComponent>
      </SearchContextProvider>
    </Router>
  </React.StrictMode>
)
