import React, { useState } from "react";
import {
  IoHome,
  IoPerson,
  IoCall,
  IoFolderOpen,
  IoPencil,
} from "react-icons/io5";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className="floating_card fixed left-[50%] translate-x-[-50%] bottom-0 mb-5  rounded-[50px]	opacity-75">
      <div className="sm:m-1 md:m-2 flex justify-center text-white">
        <a
          href="#home"
          className={
            activeMenu === "home"
              ? "bg-white rounded-[50px] mr-1 p-5 text-black"
              : "hover:bg-black  hover:rounded-[50px] mr-1 p-5 hover:opacity-50"
          }
          onClick={() => setActiveMenu("home")}
        >
          <IoHome size="1.5em" />
        </a>
        <a
          href="#about"
          className={
            activeMenu === "about"
              ? "bg-white rounded-[50px] mr-1 p-5 text-black"
              : "hover:bg-black  hover:rounded-[50px] mr-1 p-5 hover:opacity-50"
          }
          onClick={() => setActiveMenu("about")}
        >
          <IoPerson size="1.5em" />
        </a>
        <a
          href="#experience"
          className={
            activeMenu === "experience"
              ? "bg-white rounded-[50px] mr-1 p-5 text-black"
              : "hover:bg-black  hover:rounded-[50px] mr-1 p-5 hover:opacity-50"
          }
          onClick={() => setActiveMenu("experience")}
        >
          <IoPencil size="1.5em" />
        </a>
        <a
          href="#portofolio"
          className={
            activeMenu === "portofolio"
              ? "bg-white rounded-[50px] mr-1 p-5 text-black"
              : "hover:bg-black  hover:rounded-[50px] mr-1 p-5 hover:opacity-50"
          }
          onClick={() => setActiveMenu("portofolio")}
        >
          <IoFolderOpen size="1.5em" />
        </a>
        <a
          href="#contact"
          className={
            activeMenu === "contact"
              ? "bg-white rounded-[50px] p-5 text-black"
              : "hover:bg-black  hover:rounded-[50px] p-5 hover:opacity-50"
          }
          onClick={() => setActiveMenu("contact")}
        >
          <IoCall size="1.5em" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
