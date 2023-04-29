import React from 'react'
<<<<<<< HEAD
import Header from './Header/Header'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
=======
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
