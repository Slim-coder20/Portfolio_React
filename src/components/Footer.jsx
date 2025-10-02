import React from 'react'

export default function Footer() {
  return (
     <footer className='bg-slate-900 text-slate-300 dark:bg-black dark:text-slate-400 p-5 text-center border-t border-white/10'>
        <p>© {new Date().getFullYear()} SLIM DEV — Tous droits réservés</p>
     </footer>
  )
}
