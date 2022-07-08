import { IoMedal, IoPeople, IoCreate } from "react-icons/io5";

const About = () => {
  return (
    <>
      <h1 id="about" className="text-white text-center opacity-50">
        Get To Know
      </h1>
      <h2 className="text-3xl font-bold text-sky-400 text-center ">About Me</h2>
      <div className="m-10 lg:grid lg:grid-cols-2 sm:grid  sm:justify-items-center">
        <div className="about_image bg-sky-400 rounded-[20px] sm:mb-10">
          <img
            src={require("../assets/me4.jpg")}
            alt="me"
            className="lg:w-96 lg:h-96 sm:w-60 sm:h-60 rounded-[20px] mx-auto rotate-12	hover:rotate-0 hover:transition hover:delay-150 hover:duration-300"
          />
        </div>
        <div className="">
          <div className="md:flex md:justify-center lg:justify-start sm:grid sm:grid-cols-2 gap-3 text-center">
            <div className="card_about p-5 sm:h-36 rounded-lg hover:border-2 hover:border-white text-white hover:text-white">
              <p>
                <IoMedal className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-4 mb-2 font-medium">Experience</p>
              <p className="opacity-50">2+ Years Working</p>
            </div>

            <div className="card_about p-5 sm:h-36 rounded-lg hover:border-2 hover:border-white">
              <p>
                <IoPeople className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-4 mb-2 font-medium text-white">Clients</p>
              <p className="text-white opacity-50">300+ Worldwide</p>
            </div>

            <div className="card_about sm:h-36 p-5 rounded-lg hover:border-2 hover:border-white">
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
            <button className="rounded-md bg-sky-400 hover:bg-white content-start p-3">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
