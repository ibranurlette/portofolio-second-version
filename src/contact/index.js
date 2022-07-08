import { IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <h1 id="contact" className="text-white text-center mt-10 opacity-50">
        Get In Touch
      </h1>
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="mt-5 lg:flex lg:justify-center sm:grid sm:justify-items-center">
        <div className="">
          <div className="md:flex md:justify-start mb-5 text-center">
            <div className="contact_card px-2 py-4 mr-5 sm:mb-5 rounded-lg w-56 hover:border-2 hover:border-white">
              <p>
                <IoMail className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-medium text-white text-base">
                Email
              </p>
              <p className="text-white opacity-50">ibraputra843@gmail.com</p>
              <p className="text-sky-400">Send a message</p>
            </div>

            <div className="contact_card px-2 mr-5 py-4 rounded-lg w-56 sm:mb-5 hover:border-2 hover:border-white">
              <p>
                <IoLogoLinkedin className="text-sky-400 mx-auto" size="1.5em" />
              </p>
              <p className="mt-3 mb-2 font-bold text-base text-white">
                Linkedin
              </p>
              <p className="text-white opacity-50">Ibra_Nurlette</p>
              <p className="text-sky-400">Send a message</p>
            </div>

            <div className="contact_card px-2 py-4 rounded-lg w-56 sm:mb-5 hover:border-2 hover:border-white">
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
    </>
  );
};

export default Contact;
