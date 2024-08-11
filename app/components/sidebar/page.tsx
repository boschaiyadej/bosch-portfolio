import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { MdOutlineChatBubble } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="fixed h-screen left-0 top-0 bg-neutral w-12" id="sidebar">
      <div className="flex flex-col justify-between items-center h-full w-full py-8">
        {/* top Logo */}
        <div className="">
          <h1 className="text-xl text-nowrap -rotate-90 origin-center">
            <span className="text-4xl text-orange-500 font-bold">B</span>osch
          </h1>
        </div>
        {/* mid sidebar icon */}
        <div className="sidebar">
          <div className="sidebar_menu">
            <ul className="sidebar_list flex flex-col items-center gap-4">
              <GoHomeFill className="text-2xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <GoPersonFill className="text-2xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <RiGraduationCapFill className="text-2xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <BsStack className="text-2xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <MdOutlineChatBubble className="text-2xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
            </ul>
          </div>
        </div>
        {/* bot dark mode icon */}
        <div className="mode_icon">
          <div>
            <ul className="sidebar_list flex flex-col items-center gap-4">
              <FaLinkedin className="text-xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <FaGithub className="text-xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
              <SiGooglescholar className="text-xl hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
