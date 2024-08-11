import React from "react";

interface ExCardProps {
  icon: React.ReactNode;
  year: string;
  title: string;
  desc: string;
}

const ExCard: React.FC<ExCardProps> = ({ icon, year, title, desc }) => {
  return (
    <div className="relative pl-[3.125rem] pb-2 sm:pb-12 last:pb-0 border-l-[2px] border-accent">
      <div className="absolute left-[-0.7rem] py-[0.4375rem] top-0 text-xl bg-base-300 hover:text-accent ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-300">
        {icon}
      </div>
      <span className="text-base hover:text-accent">{year}</span>
      <h3 className="text-base font-bold hover:text-accent">{title}</h3>
      <p className="text-sm hover:text-accent">{desc}</p>
    </div>
  );
};

export default ExCard;
