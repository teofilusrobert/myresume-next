function HomeHero() {
  const expYears = new Date().getFullYear() - 2017
  return (
    <section className="relative w-full h-full bg-indigo-100/25 dark:bg-indigo-900/75 overflow-hidden transition-colors duration-500 ease-in-out">
      <div className="absolute top-0 left-1/2 w-[25vw] h-screen bg-gradient-to-t from-indigo-800 to-indigo-400 skew-x-12 -z-10"/>
      <div className="mask-trans absolute left-1/4 bottom-0 w-full h-full -z-10">
        <div className="mask-sil w-full h-full dark:bg-white">
          <img src="/images/hero.jpg" alt="hero" width="0" height="0" sizes="100vw" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col w-full h-screen justify-center px-8 space-y-4">
        <div>
          <h1 className="text-3xl font-semibold font-mono dark:text-white">
            Hi, I'am<br/>
            <span className="text-orange-500">Teofilus Robert</span><br/>
            @Front-End Developer
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded shadow p-4 max-w-min flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="relative basis-[100px] w-[100px] h-[120px] bg-indigo-600 rounded">
              <p className="text-9xl text-white dark:text-slate-900 font-bold font-serif leading-[100px] -mt-4 ml-8">
                {expYears}
              </p>
              <p className="absolute bottom-0 left-0 uppercase text-[11px] font-semibold text-white bg-gradient-to-r from-orange-500 to-transparent rounded-tr-[100%] p-1 pt-3 pr-2">
                years<br/>
                of<br/>
                experience
              </p>
            </div>
            <p className="flex-1 text-sm min-w-[276px] dark:text-white">
              Over {expYears} years of experience in software development, delivering successful web and mobile applications.
              <br/>
              <br/>
              Unleashing the power of teamwork, we transform ideas into innovations!
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href="https://wa.me/6282241018292"
              role="button"
              target="_blank"
              rel="noreferrer noopener"
              className="h-[40px] border-2 border-black dark:border-white flex justify-center items-center rounded-full py-2 px-4 space-x-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png"
                alt="Whatsapp"
                title="Whatsapp"
                width="24"
                height="24"
                className="dark:invert"
              />
              <p className=" text-sm dark:text-white">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero