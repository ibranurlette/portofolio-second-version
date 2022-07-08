import { IoCheckmarkCircle } from "react-icons/io5";

const Experience = () => {
  return (
    <>
      <h1 id="experience" className="text-white text-center opacity-50">
        What Skills I have
      </h1>
      <h2 className="text-3xl font-bold text-white text-center">
        My Experience
      </h2>
      <div className="m-10 md:flex md:justify-center sm:grid sm:justify-items-center ">
        <div className="experience_card sm:mb-5 py-12 sm:px-5 lg:px-10 mr-7 lg:w-[32rem] sm:w-[20rem] rounded-[20px] hover:border-2 hover:border-white">
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
        <div className="experience_card sm:mb-5 py-12 sm:px-5 lg:px-10 mr-7 lg:w-[32rem] sm:w-[20rem] rounded-[20px] hover:border-2 hover:border-white">
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
    </>
  );
};

export default Experience;
