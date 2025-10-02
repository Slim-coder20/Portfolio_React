import React, { useState } from 'react'
import { navLinks as links } from '../data/navigation'
import { NavLink } from 'react-router-dom'



export default function Nav() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => [
    'relative text-sm text-gray-200 hover:text-white dark:text-slate-300 dark:hover:text-white transition-colors',
    // underline animation
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-amber-400 after:transition-transform",
    isActive ? 'text-amber-400 after:scale-x-100' : 'hover:after:scale-x-100',
  ].join(' ')

  const mobileLinkClass = ({ isActive }) => [
    'block rounded-md px-3 py-2',
    isActive ? 'text-amber-400' : 'text-gray-200 dark:text-slate-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5',
  ].join(' ')

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-800/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/30">
              {/* Simple icône */}
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-90">
                <path fill="currentColor" d="M12 2L2 7l10 5l10-5zM2 17l10 5l10-5M2 12l10 5l10-5"/>
              </svg>
            </span>
            <span className="text-white font-bold">
              SLIM<span className="text-amber-400"> DEV</span>
            </span>
          </NavLink>

          {/* Liens Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.id}>
                <NavLink to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>


          {/* Bouton Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.id}>
                  <NavLink
                    to={l.to}
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}