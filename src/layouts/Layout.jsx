import React from 'react'
import { Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className=' min-h-screen flex flerx-col bg-[#ecf0f1]'>
        <Nav/>
    <main>
        <Outlet/>
    </main>
        <Footer/>

    </div>
  )
}
