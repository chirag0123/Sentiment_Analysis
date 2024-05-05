import React from 'react'
import Navbar from './components/Navbar'
import ParticlesComponent from './components/Particle'
import TextAnalysisComponent from './components/TextAnalysis'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
      <Router>
      <ParticlesComponent id='particles'/>
        <Navbar/>
        <Routes>
        <Route path='/' element={<TextAnalysisComponent />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
