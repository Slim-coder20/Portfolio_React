import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

export default function Layout() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-slate-950 dark:bg-slate-950' : 'bg-slate-50'}`}>
      <Nav/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
