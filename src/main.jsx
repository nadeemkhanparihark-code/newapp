import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
   <Footer/>
   </BrowserRouter>
  </StrictMode>,
)
