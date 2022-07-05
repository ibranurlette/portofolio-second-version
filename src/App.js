import "./App.css";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoMedal,
  IoPeople,
  IoCreate,
} from "react-icons/io5";

function App() {
  return (
    <div className="App bg-sky-900">
      {/* first section */}
      <div className="pt-8 pb-8">
        <div className="mb-5">
          <h1 className="text-white">Hello i'm</h1>
          <h2 className="text-3xl font-bold text-white">Ibra Nurlette</h2>
          <h1 className="text-white">Frontend Developer</h1>
        </div>
        <div className="mb-8">
          <button className="rounded-md text-sky-500 border-2 border-blue-500 p-3 mr-4">
            Download Cv
          </button>
          <button className="rounded-md bg-sky-400 p-3">Let's Talk </button>
        </div>
        <div className="flex justify-around items-end ">
          <div>
            <IoLogoLinkedin className="text-white" size="1.5em" />
            <IoLogoGithub className="text-white mt-2 mb-2" size="1.5em" />
            <IoLogoInstagram className="text-white" size="1.5em" />
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-72 p-2 rounded-t-[150px]">
            <img
              src={require("./assets/me.jpg")}
              alt="me"
              className=" mx-auto rounded-t-[150px]"
            ></img>
          </div>
          <div>
            <h2 className="rotate-90 mb-8 text-white"> Scroll down</h2>
          </div>
        </div>
      </div>
      {/* second section */}
      <h1 className="text-white">Get To Know</h1>
      <h2 className="text-3xl font-bold text-white">About Me</h2>
      <div className="m-10 grid grid-cols-2">
        <div>
          <img
            src={require("./assets/me.jpg")}
            alt="me"
            className="w-96 h-96 rounded-[20px] mx-auto"
          />
        </div>
        <div className="">
          <div className="flex justify-start mb-5">
            <div className="bg-sky-500 p-2 mr-5 rounded-lg">
              <p>
                <IoMedal className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-2 mb-2">Experience</p>
              <p>2+ Years Working</p>
            </div>
            <div className="bg-sky-500 p-2 mr-5 rounded-lg">
              <p>
                <IoPeople className="text-white mx-auto" size="1.5em" />
              </p>
              <p className="mt-2 mb-2">Clients</p>
              <p>300+ Worldwide</p>
            </div>
            <div className="bg-sky-500 p-2 rounded-lg">
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
    </div>
  );
}

export default App;
