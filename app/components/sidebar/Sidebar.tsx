"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineChatBubble } from "react-icons/md";
import { useScroll } from "../../contexts/ScrollContext";
import ThemeToggle from "./ThemeToggle";

const Sidebar: React.FC = () => {
  const { scrollTo } = useScroll();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      className="fixed h-full left-0 top-0 bottom-0 bg-neutral sm:w-14 w-12"
      id="sidebar"
    >
      <div className="flex flex-col justify-between items-center h-full w-full py-8">
        {/* top Logo */}
        <div className="logo">
          <button onClick={() => scrollTo("hero")}>
            <h1 className="text-xl text-neutral-content text-nowrap -rotate-90 origin-center">
              <span className="text-4xl text-orange-500 font-bold">B</span>osch
            </h1>
          </button>
        </div>
        {/* mid sidebar icon */}
        <div className="sidebar">
          <div className="sidebar_menu">
            <div className="sidebar_list flex flex-col items-center gap-4">
              <button onClick={() => scrollTo("hero")}>
                <GoHomeFill className="text-2xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </button>
              <button onClick={() => scrollTo("about")}>
                <GoPersonFill className="text-2xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </button>
              <button onClick={() => scrollTo("experience")}>
                <RiGraduationCapFill className="text-2xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </button>
              <button onClick={() => scrollTo("contact")}>
                <MdOutlineChatBubble className="text-2xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* bot dark mode icon */}
        <div className="mode_icon">
          <div>
            <ul className="sidebar_list flex flex-col items-center gap-4">
              <li
                className="cursor-pointer"
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/ratchapong-chaiyadej/"
                  )
                }
              >
                <FaLinkedin className="text-xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </li>
              <li
                className="cursor-pointer"
                onClick={() => openInNewTab("https://github.com/boschaiyadej")}
              >
                <FaGithub className="text-xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </li>
              <li
                className="cursor-pointer"
                onClick={() =>
                  openInNewTab(
                    "https://scholar.google.com/citations?user=GeSakA8AAAAJ&hl=th"
                  )
                }
              >
                <SiGooglescholar className="text-xl text-neutral-content hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              </li>
              <li>
                <div className="btn rounded-full p-1 hover:text-accent ease-in-out">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
