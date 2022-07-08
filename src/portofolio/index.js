const Portofolio = () => {
  return (
    <>
      <h1 id="portofolio" className="text-white text-center opacity-50">
        My Recent Work
      </h1>
      <h2 className="text-3xl font-bold text-white text-center">Portfolio</h2>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-80 lg:mx-10 justify-items-center	mt-5">
        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px] sm:mb-5 sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/kijangmas.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">KijangMas</h1>
          <p className="text-white">
            Platform untuk memenuhi kebutuhan Anggota Koperasi Jaringan
            Masyarakat Indonesia Sejahtera (KJMIS), telah tersedia di Playstore
          </p>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 mt-5 font-medium hover:text-black hover:bg-white hover:border-white ">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card sm:w-[18rem] p-5  rounded-[20px] sm:mb-5  sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/kijangmart.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">
            KijangMart
          </h1>
          <p className="text-white">
            Platform warung digital untuk Anggota Koperasi Jaringan Masyarakat
            Indonesia Sejahtera (KJMIS), telah tersedia di Playstore
          </p>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 mt-5 font-medium hover:text-black hover:bg-white hover:border-white">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>

        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px] sm:mb-5 sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 3</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium hover:text-black hover:bg-white hover:border-white">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>

        <div className="portofolio_card sm:w-[18rem] p-5 rounded-[20px] sm:mb-5 sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 4</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium hover:text-black hover:bg-white hover:border-white">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>

        <div className="portofolio_card sm:w-[18rem] p-5 rounded-[20px] sm:mb-5 sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 5</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium hover:text-black hover:bg-white hover:border-white">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card sm:w-[18rem] p-5 rounded-[20px] sm:mb-5 sm:mr-5 hover:border-2 hover:border-white">
          <img
            src={require("../assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 6</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium hover:text-black hover:bg-white hover:border-white">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 hover:bg-white hover:border-white">
            Live Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
