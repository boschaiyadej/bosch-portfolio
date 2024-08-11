import React from "react";
import ExCard from "./ExCard";
import JobData from "./JobData";
import EducationData from "./EducationData";
import TrainingData from "./TrainingData";

const Experience: React.FC = () => {
  const jobHistory = JobData;
  const education = EducationData;
  const training = TrainingData;

  return (
    <section className="min-h-screen h-fit bg-base-300 pl-14" id="experience">
      <div className="w-full h-full p-10">
        <h1 className="text-3xl font-bold hover:text-accent py-5">
          Experience
        </h1>
        <div className="resume__container md:grid md:grid-cols-3 gap-1">
          {/* Job History */}
          <div>
            <h2 className="text-xl font-bold mb-3 ml-5 mx-0 sm:mx-5 mr-10 pt-4 border-b-2 md:border-0 border-accent pb-2 hover:text-accent">
              Job History
            </h2>
            <div className="timeline mx-12 grid">
              {jobHistory.map((item) => (
                <ExCard
                  key={item.id}
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold mb-3 ml-5 mr-10 pt-4 border-b-2 md:border-0 border-accent pb-2 hover:text-accent">
              Education
            </h2>
            <div className="timeline mx-12 grid">
              {education.map((item) => (
                <ExCard
                  key={item.id}
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

          {/* Training */}
          <div>
            <h2 className="text-xl font-bold mb-3 ml-5 mr-10 pt-4 border-b-2 md:border-0 border-accent pb-2 hover:text-accent">
              Certificate
            </h2>
            <div className="timeline mx-12 grid">
              {training.map((item) => (
                <ExCard
                  key={item.id}
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
