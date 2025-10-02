import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="A propos"
      className="scroll-mt-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/*  Titre  */}
          <h1 className=" text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {" "}
            Des solutions web fiables, {" "}
            <span className=" text-amber-500">performantes</span> et {" "}
            <span className=" text-amber-500">pérennes</span>
          </h1>
          <div className="md:col-span-2">
            <p className=" mt-3 text-slate-600 dark:text-slate-300 leading-relaxed max-w-prose ">
              Professionnelle et claire Je conçois des applications web modernes
              avec une attention particulière à la qualité, aux performances et à
              l’expérience utilisateur. Junior en développement Full‑Stack, j’ai
              travaillé sur des projets React et Node/Symfony, où j’ai appris à
              structurer un code maintenable, collaborer en équipe et livrer des
              fonctionnalités utiles. Mon objectif: apporter une contribution
              rapide, fiable et mesurable aux produits que je développe.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-white font-semibold shadow-sm hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-200 font-semibold bg-white/70 dark:bg-slate-800 backdrop-blur hover:bg-white dark:hover:bg-slate-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 transition"
              >
                Me contacter
              </a>
            </div>
          </div>
          
          
          {/* Photo + cartes "" */}

        </div>
      </div>
    </section>
  );
};
