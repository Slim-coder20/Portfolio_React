const Home = () => {
  return (
    <section id="home" aria-label="Accueil" className=" scroll-mt-24">
      <div className=" max-w-screen-xl mx-auto px-4 lg:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24 ">
          {/* Colonne Text  */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100">
              Bonjour, je suis <span className="text-amber-500">SlimDev</span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-slate-300 leading-relaxed max-w-prose">
              Passionné par la création d’expériences utilisateurs fluides et
              fonctionnelles, j'ai travaillé sur des projets utilisant HTML,
              CSS, Bootstrap, Tailwind, React pour le Front-End, et PHP avec le
              framework Symfony Next.js, Node.js pour le Back-End.
            </p>
          </div>
          {/* Colonne Image  */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto">
            <img
              src="/portrait.jpg"
              alt="portrait de Slim Abida "
              className="w-full h-full rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
