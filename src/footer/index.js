import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-sky-400 w-full py-10">
      <h2 className="title_footer text-3xl font-bold text-white text-center mb-10 ">
        Copyright
      </h2>

      <div className="flex justify-center mb-10 font-medium	opacity-60">
        <a className="home_footer" href="#home">
          <p className="mr-10">Home</p>
        </a>
        <a href="#about">
          <p className="mr-10">About</p>
        </a>
        <a href="#experience">
          <p className="mr-10">Experience</p>
        </a>
        <a href="#portofolio">
          <p>Portfolio</p>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/ibra-nurlette/"
          target="_blank"
          rel="noreferrer"
          className="icon_footer rounded-lg p-2 mr-5 hover:bg-sky-400 hover:border-2"
        >
          <IoLogoLinkedin className="logo_footer" size="1.5em" />
        </a>
        <a
          href="https://github.com/ibranurlette"
          target="_blank"
          rel="noreferrer"
          className="icon_footer rounded-lg p-2 mr-5 hover:bg-sky-400 hover:border-2"
        >
          <IoLogoGithub className="logo_footer" size="1.5em" />
        </a>
        <a
          href="https://www.instagram.com/ibra_nurlette/"
          target="_blank"
          rel="noreferrer"
          className="icon_footer rounded-lg p-2 mr-5 hover:bg-sky-400 hover:border-2"
        >
          <IoLogoInstagram className="logo_footer" size="1.5em" />
        </a>
      </div>

      <p className="mt-10 text-center font-medium	opacity-60">
        © Copyright by ibra nurlette
      </p>
    </div>
  );
};

export default Footer;
