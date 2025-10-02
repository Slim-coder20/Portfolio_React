import React from 'react'
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiSymfony,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" aria-label="Compétences" className="scroll-mt-24">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Compétences
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed max-w-prose">
          Une sélection des technologies et outils que j'utilise pour créer des applications web modernes et performantes.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Compétences clés</h2>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiReact className="text-sky-500 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">React</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiTailwindcss className="text-sky-400 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">Tailwind</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiNodedotjs className="text-green-600 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">Node.js</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiSymfony className="text-gray-900 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">Symfony</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiJavascript className="text-yellow-500 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">JavaScript</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiTypescript className="text-blue-600 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">TypeScript</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiGit className="text-orange-600 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">Git</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-black/5 dark:ring-slate-700 shadow transition hover:shadow-md hover:-translate-y-0.5 hover:ring-amber-200 focus-within:ring-amber-300">
              <SiDocker className="text-sky-600 text-xl" aria-hidden="true" />
              <span className="text-gray-800 dark:text-slate-200 text-sm">Docker</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

