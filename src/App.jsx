import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import VansDetails from './Components/Vans/VansDetails';
import VansPrice from './Components/Vans/VansPrice';
import VansIncome from './Components/Vans/VansIncome';
import Front from './Components/Front';
import Layout from './Components/Layout';

function App() {
  const [data, setData] = useState(0)
  return (
    <>
      <Routes>
      <Route path='/' element  = {<Layout/>} >
      <Route path='/' element  = {<Home/>} />
      <Route path='/about' element  = {<About/>} />
      <Route path='/contact' element  = {<Contact/>} />
      <Route path='/vans' element  = {<VansDetails/>} />
      <Route path='/price' element  = {<VansPrice/>} />
      <Route path='/income' element  = {<VansIncome/>} />
      <Route path='/front' element  = {<Front/>} />
      </Route>
      </Routes>
    </>
  )
}



export default App
