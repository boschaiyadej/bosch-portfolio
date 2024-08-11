import React from "react";
import CodeSkills from "./CodeSkills";
import ToolsAndPrograms from "./ToolsAndPrograms";
import { MdSimCardDownload } from "react-icons/md";
import TechSkills from "./TechnicalSkills";

const About: React.FC = () => {
  return (
    <section className="h-screen bg-base-100 pl-14" id="about">
      <div className="w-full h-full p-10">
        <h1 className="text-5xl font-bold hover:text-accent my-5">About Me</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="h-fit w-full bg-warning text-warning-content rounded-xl p-10">
            <p className="text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`" Hi! My name is Ratchapong Chaiyadej, you can call me Bos. I live in Nonthaburi, Thailand. I graduated with a bachelor's degree in environmental health from Thammasat University. Additionally, I'm studying for a master's degree in occupational health and safety at Thammasat University. Currently I'm starting a career in web development. "`}
              &nbsp;
            </p>
            <div className="my-8">
              <p className="text-end">Nice to see you.</p>
              <p className="text-end font-bold">Bosch</p>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-accent text-accent-content hover:text-primary-content hover:bg-primary border-0 ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300">
                Resume
                <MdSimCardDownload className="animate-bounce" />
              </button>
            </div>
          </div>
          <div className="md:col-start-2 md:col-end-3 xl:col-start-2 xl:col-end-4">
            <CodeSkills />
            <TechSkills />
            <ToolsAndPrograms />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
