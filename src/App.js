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
        <div className="mb-5 text-center ">
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
        <div className="flex justify-around items-end ">
          <div>
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
          <div className="bg-sky-400 bg-image w-72 rounded-t-[150px]">
            <img
              src={require("./assets/me2.png")}
              alt="me"
              className="rounded-t-[150px]"
            />
          </div>
          <div>
            <h2 className="rotate-90 mb-8 text-sky-400"> Scroll down</h2>
          </div>
        </div>
      </div>
      {/* second section */}
      <h1 className="text-white text-center">Get To Know</h1>
      <h2 className="text-3xl font-bold text-white text-center">About Me</h2>
      <div className="m-10 grid grid-cols-2">
        <div>
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-96 rounded-[20px] mx-auto"
          />
        </div>
        <div className="">
          <div className="flex justify-start mb-5 text-center">
            <div className="bg-sky-400 p-2 mr-5 rounded-lg">
              <p>
                <IoMedal className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-2 mb-2">Experience</p>
              <p>2+ Years Working</p>
            </div>
            <div className="bg-sky-400 p-2 mr-5 rounded-lg">
              <p>
                <IoPeople className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-2 mb-2">Clients</p>
              <p>300+ Worldwide</p>
            </div>
            <div className="bg-sky-400 p-2 rounded-lg">
              <p>
                <IoCreate className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-2 mb-2">Projects</p>
              <p>80+ Completed</p>
            </div>
          </div>
          <p className="w-[28rem] text-start text-white mb-3">
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
      <h1 className="text-white text-center">What Skills I have</h1>
      <h2 className="text-3xl font-bold text-white text-center">
        My Experience
      </h2>
      <div className="m-10 flex justify-center">
        <div className="bg-sky-400 py-12 px-10 mr-7 w-[32rem] rounded-[20px]">
          <h1 className="text-2xl mb-8 font-bold">Frontend developer</h1>
          <div className="flex justify-between ">
            <div className="">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>HTML</b>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>JavaScript</b>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex justify-start ">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Tailwind</b>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>CSS</b>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Bootstrap</b>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex justify-start ">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>React</b>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 py-12 px-10 w-[32rem] rounded-[20px]">
          <h1 className="text-2xl mb-8 font-bold">Backend developer</h1>
          <div className="flex justify-between ">
            <div className="">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>MySql</b>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Nest Js</b>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex justify-start ">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>PostgreiSql</b>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start mb-5">
                <div>
                  <IoCheckmarkCircle className="" size="1.5em" />
                </div>
                <div className="text-justify ml-3">
                  <b>Expres Js</b>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four section */}
      <h1 className="text-white text-center">My Recent Work</h1>
      <h2 className="text-3xl font-bold text-white text-center">Portfolio</h2>
      <div className="m-10 grid grid-cols-3 mx-80 ">
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 1</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 2</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 3</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5 mt-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 4</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5 mt-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 5</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
        <div className="bg-sky-400 p-5 rounded-[20px]	mr-5 mt-5">
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-60 h-60 rounded-[20px] mx-auto"
          />
          <h1 className="text-lg text-white text-start mt-3">App 6</h1>
          <button className="rounded-md bg-sky-400 justify-items-start p-3 mr-3 mt-5">
            Github
          </button>
          <button className="rounded-md bg-sky-400 p-3">Live Demo</button>
        </div>
      </div>

      {/* Five section */}
      <h1 className="text-white text-center">Get In Touch</h1>
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="m-10 flex justify-center">
        <div className="">
          <div className="flex justify-start mb-5 text-center">
            <div className="bg-sky-400 px-2 py-4 mr-5 rounded-lg w-56">
              <p>
                <IoMail className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-bold text-base">Email</p>
              <p className="font-light">ibraputra843@gmail.com</p>
              <p>Send a message</p>
            </div>
            <div className="bg-sky-400 px-2 mr-5 py-4 rounded-lg w-56">
              <p>
                <IoLogoLinkedin className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-bold text-base">Linkedin</p>
              <p className="font-light">Ibra_Nurlette</p>
              <p>Send a message</p>
            </div>
            <div className="bg-sky-400 px-2 py-4 rounded-lg w-56">
              <p>
                <IoLogoInstagram className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-bold text-base">Instagram</p>
              <p className="font-light">Ibra_Nurlette</p>
              <p>Send a message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
