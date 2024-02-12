import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
  )
}

export default Layout