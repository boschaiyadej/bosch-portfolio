import { RiGraduationCapFill } from "react-icons/ri";

interface EducationItem {
  id: number;
  category: string;
  icon: JSX.Element;
  year: string;
  title: string;
  desc: string;
}

const EducationData: EducationItem[] = [
  {
    id: 3,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2024",
    title: "Full-Stack Software Development",
    desc: "Coding Bootcamp TechUp",
  },
  {
    id: 2,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2022 - 2024",
    title: "M.Sc.Occupational Health and Safety",
    desc: "Faculty of Public Health, Thammasat University",
  },
  {
    id: 1,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2014 - 2018",
    title: "B.Sc.Environmental Health",
    desc: "Faculty of Public Health, Thammasat University",
  },
];

export default EducationData;
