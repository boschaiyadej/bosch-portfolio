import React from "react";
import {
  SiMicrosoft,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSketchup,
  SiFigma,
  SiClickup,
} from "react-icons/si";
import { FaDatabase, FaGithub } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

const toolsAndPrograms = [
  { icon: FaGithub, label: "Git/GitHub" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiAdobeillustrator, label: "Adobe Illustrator" },
  { icon: SiAdobephotoshop, label: "Adobe Photoshop" },
  { icon: FaDatabase, label: "IBM SPSS Statistics" },
  { icon: GiArchiveResearch, label: "Endnote" },
  { icon: SiMicrosoft, label: "MS. Word, Excel, PowerPoint, Visio" },
  { icon: SiClickup, label: "ClickUp" },
  { icon: SiSketchup, label: "SketchUp" },
];

const ToolsAndPrograms: React.FC = () => (
  <div className="px-10">
    <h2 className="text-2xl font-bold border-b-2 border-accent pb-1 hover:text-accent">
      Program & Tools
    </h2>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4 p-4">
      {toolsAndPrograms.map(({ icon: Icon, label }, index) => (
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

export default ToolsAndPrograms;
