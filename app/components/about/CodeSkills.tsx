import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbFileTypeSql } from "react-icons/tb";

const codeSkills = [
  { icon: SiHtml5, label: "HTML" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiRedux, label: "Redux" },
  { icon: SiNextdotjs, label: "Next" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiBootstrap, label: "Bootstrap" },
  { icon: IoLogoNodejs, label: "Node.JS" },
  { icon: SiExpress, label: "Express.JS" },
  { icon: TbFileTypeSql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
];

const CodeSkills: React.FC = () => (
  <div className="px-10">
    <h2 className="text-2xl font-bold border-b-2 border-accent pb-1 hover:text-accent">
      Coding Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 p-4">
      {codeSkills.map(({ icon: Icon, label }, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <Icon className="text-xl mb-2 hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-300" />
            <span className="text-sm sm:text-base hover:text-accent">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CodeSkills;
