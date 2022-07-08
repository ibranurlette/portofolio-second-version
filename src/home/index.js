import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
const Home = () => {
  return (
    <div className="pt-8 pb-8" id="home">
      <div className="mb-5 text-center">
        <h1 className="text-white">Hello I'm</h1>
        <h2 className="text-3xl font-bold text-white">Ibra Nurlette</h2>
        <h1 className="text-white">Frontend Developer</h1>
      </div>
      <div className="mb-8 text-center	">
        <button className="rounded-md text-sky-400 border-2 border-sky-400 hover:border-white p-3 mr-4 font-medium hover:text-black hover:bg-white hover:border-white">
          <a href="cv_ibra_nurlette.pdf" download>
            Download CV
          </a>
        </button>
        <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 font-medium hover:bg-white hover:border-white">
          Let's Talk{" "}
        </button>
      </div>
      <div className="flex justify-around items-end">
        <div className="sm:ml-8 mr-4">
          <a
            href="https://www.linkedin.com/in/ibra-nurlette/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin
              className="text-sky-400 hover:text-white"
              size="1.5em"
            />
          </a>
          <a
            href="https://github.com/ibranurlette"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub
              className="text-sky-400 hover:text-white mt-4 mb-4"
              size="1.5em"
            />
          </a>
          <a
            href="https://www.instagram.com/ibra_nurlette/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram
              className="text-sky-400 hover:text-white"
              size="1.5em"
            />
          </a>
        </div>
        <div className="bg_image bg-sky-400 lg:w-72 sm:w-64 rounded-t-[150px]">
          <img
            src={require("../assets/me4.png")}
            alt="me"
            className="rounded-t-[150px]"
          />
        </div>
        <button className="rotate-90 mb-8 text-sky-400 hover:text-white">
          <a href="#contact">Scroll down</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
