import React from "react";
import { TbHierarchy3 } from "react-icons/tb";
import { MdAssessment, MdFlood } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiSolidFactory } from "react-icons/bi";

const techSkills = [
  { icon: MdAssessment, label: "Health Risk Assessments" },
  { icon: MdFlood, label: "Disaster Risk Managements" },
  { icon: GiArtificialIntelligence, label: "Artificial Neural Network (ANNs)" },
  { icon: BiSolidFactory, label: "Safety Instrumented System (SIS)" },
  { icon: TbHierarchy3, label: "Analytic Hierarchy Process (AHP)" },
];

const TechSkills: React.FC = () => (
  <div className="px-10">
    <h2 className="text-2xl font-bold border-b-2 border-accent pb-1 hover:text-accent">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4 p-4">
      {techSkills.map(({ icon: Icon, label }, index) => (
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

export default TechSkills;
