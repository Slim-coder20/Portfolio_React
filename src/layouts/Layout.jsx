import React from 'react'
import { Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className=' min-h-screen flex flex-col bg-[#ecf0f1]'>
        <Nav/>
    <main className="flex-1">
        <Outlet/>
    </main>
        <Footer/>

    </div>
  )
}
