import { BsBriefcaseFill } from "react-icons/bs";

interface JobItem {
  id: number;
  category: string;
  icon: JSX.Element;
  year: string;
  title: string;
  desc: string;
}

const JobData: JobItem[] = [
  {
    id: 3,
    category: "job",
    icon: <BsBriefcaseFill />,
    year: "2018 - 2023",
    title: "Senior Project Coordinator",
    desc: "Thai Disaster Preparedness Foundation (TDPF)",
  },
  {
    id: 2,
    category: "job",
    icon: <BsBriefcaseFill />,
    year: "2018",
    title: "Internship Trainee",
    desc: "Chaiyaboon Brother Co., Ltd",
  },
  {
    id: 1,
    category: "experience",
    icon: <BsBriefcaseFill />,
    year: "2016 - 2018",
    title: "Research Assistant",
    desc: "Faculty of Public Health, Thammasat University",
  },
];

export default JobData;
