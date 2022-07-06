import "./App.css";
import "./index.css";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoMedal,
  IoPeople,
  IoCreate,
  IoCheckmarkCircle,
  IoMail,
} from "react-icons/io5";

function App() {
  return (
    <div>
      {/* first section */}
      <div className="pt-8 pb-8">
        <div className="mb-5 text-center">
          <h1 className="text-white">Hello I'm</h1>
          <h2 className="text-3xl font-bold text-white">Ibra Nurlette</h2>
          <h1 className="text-white">Frontend Developer</h1>
        </div>
        <div className="mb-8 text-center	">
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            Download CV
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3 font-medium">
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
              <IoLogoLinkedin className="text-sky-400" size="1.5em" />
            </a>
            <a
              href="https://github.com/ibranurlette"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-sky-400 mt-4 mb-4" size="1.5em" />
            </a>
            <a
              href="https://www.instagram.com/ibra_nurlette/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="text-sky-400" size="1.5em" />
            </a>
          </div>
          <div className="bg_image bg-sky-400 lg:w-72 sm:w-64 rounded-t-[150px]">
            <img
              src={require("./assets/me2.png")}
              alt="me"
              className="rounded-t-[150px]"
            />
          </div>
          <h2 className="rotate-90 mb-8 text-sky-400"> Scroll down</h2>
        </div>
      </div>
      {/* second section */}
      <h1 className="text-white text-center opacity-50">Get To Know</h1>
      <h2 className="text-3xl font-bold text-sky-400 text-center ">About Me</h2>
      <div className="m-10 lg:grid lg:grid-cols-2">
        <img
          src={require("./assets/me.jpg")}
          alt="me"
          className="w-96 h-96 rounded-[20px] mx-auto sm:mb-5"
        />
        <div className="">
          <div className="lg:flex lg:justify-start sm:grid sm:grid-cols-2 gap-3 text-center">
            <div className="card_about p-5 sm:h-36 md:mr-5 rounded-lg">
              <p>
                <IoMedal className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-4 mb-2 font-medium text-white">Experience</p>
              <p className="text-white opacity-50">2+ Years Working</p>
            </div>

            <div className="card_about p-5 sm:h-36 md:mr-5 rounded-lg">
              <p>
                <IoPeople className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-4 mb-2 font-medium text-white">Clients</p>
              <p className="text-white opacity-50">300+ Worldwide</p>
            </div>

            <div className="card_about sm:h-36 p-5 rounded-lg">
              <p>
                <IoCreate className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-4 mb-2 font-medium text-white">Projects</p>
              <p className="text-white opacity-50">80+ Completed</p>
            </div>
          </div>
          <p className="lg:w-[32rem] text-justify text-white mb-6 mt-7">
            In this practical react js project tutorial, I'm going to teach you,
            step-by-step, how to create and deploy a fully responsive personal
            portfolio website from scratch! By the end of this video, you will
            In this practical react js project tutorial, I'm going to teach you,
            step-by-step, how to create and deploy a fully responsive personal
            portfolio website from scratch! By the end of this video, you will
          </p>
          <div className="w-[6rem]">
            <button className="rounded-md bg-sky-400 content-start p-3">
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* third section */}
      <h1 className="text-white text-center opacity-50">What Skills I have</h1>
      <h2 className="text-3xl font-bold text-white text-center">
        My Experience
      </h2>
      <div className="m-10 lg:flex lg:justify-center ">
        <div className="experience_card sm:mb-5 py-12 sm:px-5 lg:px-10 mr-7 lg:w-[32rem] sm:w-[20rem] rounded-[20px]">
          <h1 className="text-2xl mb-8 font-bold text-center text-sky-400">
            Frontend developer
          </h1>
          <div className="flex justify-between ">
            <div className="sm:mr-5 text-white">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>HTML</b>
                  <p className="opacity-50">Experienced</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>JavaScript</b>
                  <p className="opacity-50">Experienced</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Tailwind</b>
                  <p className="opacity-50">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>CSS</b>
                  <p className="opacity-50">Experienced</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Bootstrap</b>
                  <p className="opacity-50">Experienced</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>React</b>
                  <p className="opacity-50">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience_card sm:mb-5 py-12 sm:px-5 lg:px-10 mr-7 lg:w-[32rem] sm:w-[20rem] rounded-[20px]">
          <h1 className="text-2xl mb-8 font-bold text-center text-sky-400">
            Backend developer
          </h1>
          <div className="flex justify-between ">
            <div className="sm:mr-5 text-white">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Express Js</b>
                  <p className="opacity-50">Intermediate</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Nest Js</b>
                  <p className="opacity-50">Intermediate</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>MySql</b>
                  <p className="opacity-50">Experience</p>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="text-sky-400" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>PostgresSql</b>
                  <p className="opacity-50">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four section */}
      <h1 className="text-white text-center opacity-50">My Recent Work</h1>
      <h2 className="text-3xl font-bold text-white text-center">Portfolio</h2>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-80 justify-items-center	mt-5">
        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px] sm:mb-5 lg:w-[24rem] lg:mr-48 sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 1</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card sm:w-[18rem] p-5  rounded-[20px] sm:mb-5 lg:w-[24rem] sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 2</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>

        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px] sm:mb-5 lg:w-[24rem] lg:ml-44 sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 3</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card sm:w-[18rem] p-5 rounded-[20px] mt-5 lg:w-[24rem] lg:mr-48 sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 4</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px] mt-5 lg:w-[24rem] sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 5</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>
        <div className="portofolio_card p-5 sm:w-[18rem] rounded-[20px]	mt-5 lg:w-[24rem] lg:ml-44 sm:mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3 mb-5">App 6</h1>
          <button className="rounded-md text-sky-400 border-2 border-sky-400 p-3 mr-4 font-medium">
            github
          </button>
          <button className="rounded-md bg-sky-400 border-2 border-sky-400 p-3">
            Live Demo
          </button>
        </div>
      </div>

      {/* Five section */}
      <h1 className="text-white text-center mt-10 opacity-50">Get In Touch</h1>
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="mt-5 lg:flex lg:justify-center sm:grid sm:justify-items-center">
        <div className="">
          <div className="lg:flex lg:justify-start mb-5 text-center">
            <div className="contact_card px-2 py-4 mr-5 sm:mb-5 rounded-lg w-56">
              <p>
                <IoMail className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-medium text-white text-base">
                Email
              </p>
              <p className="text-white opacity-50">ibraputra843@gmail.com</p>
              <p className="text-sky-400">Send a message</p>
            </div>

            <div className="contact_card px-2 mr-5 py-4 rounded-lg w-56 sm:mb-5">
              <p>
                <IoLogoLinkedin className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-bold text-base text-white">
                Linkedin
              </p>
              <p className="text-white opacity-50">Ibra_Nurlette</p>
              <p className="text-sky-400">Send a message</p>
            </div>

            <div className="contact_card px-2 py-4 rounded-lg w-56 sm:mb-5">
              <p>
                <IoLogoInstagram
                  className="text-sky-400 mx-auto"
                  size="1.5em"
                />
              </p>
              <p className="mt-3 mb-2 font-bold text-base text-white">
                Instagram
              </p>
              <p className="text-white opacity-50">Ibra_Nurlette</p>
              <p className="text-sky-400">Send a message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
