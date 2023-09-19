import React,{Fragment} from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Information from './components/Information'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Register from './components/Register'
import About from './components/About'
import Contactus from './components/Contactus'
import Services from './components/Services'
import Admin from './components/Admin'
import Resident from './components/Resident'
import Inspector from './components/Inspector'
import Dummy from './components/dummy'

function App() {

  localStorage.setItem('logged','0')
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path='/' element={[<Showcase/>,<About/>,<Information/>]}>
      </Route>
      <Route   path='/login' element={<Login/>}>
      </Route>
      <Route   path='/dummy' element={<Dummy/>}>
      </Route>
      <Route   path='/signup' element={<SignUp/>}>
      </Route>
      <Route   path='/inspector' element={<Inspector/>}>
      </Route>
      <Route   path='/services' element={[<Services/>]}>
      </Route>
      <Route   path='*' element={<Error/>}>
      </Route>
      <Route  path='/contactus' element={<Contactus/>}>
      </Route>
      <Route  path='/admin/*' element={<Admin/>}>
      </Route>
      <Route  path='/resident' element={<Resident/>}>
      </Route>
      <Route  path='/register/*' element={<Register/>}>
      </Route>
      <Route  path='/inspector/*' element={<Inspector/>}>
      </Route>
      <Route  path='/resident/*' element={<Resident/>}>
      </Route>
      </Routes>
      <Footer />
      </div>
  )
}

export default App
