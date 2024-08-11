import { FaLaptopCode } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

interface TrainingItem {
  id: number;
  category: string;
  icon: JSX.Element;
  year: string;
  title: string;
  desc: string;
}

const TrainingData: TrainingItem[] = [
  {
    id: 5,
    category: "training",
    icon: <PiCertificateFill />,
    year: "2022",
    title: "Urban Risk Reduction and Making Cities Resilient 2030",
    desc: "United Nations Office for Disaster Risk Reduction (UNDRR)",
  },
  {
    id: 4,
    category: "training",
    icon: <PiCertificateFill />,
    year: "2019",
    title: "Disaster Risk Communication",
    desc: "Asian Disaster Preparedness Center (ADPC)",
  },
  {
    id: 3,
    category: "training",
    icon: <PiCertificateFill />,
    year: "2018",
    title: "ISO14001:2015",
    desc: "NPC Safety and Environmental Service",
  },
  {
    id: 2,
    category: "training",
    icon: <PiCertificateFill />,
    year: "2018",
    title: "OHSAS18001 and Risk Assessment",
    desc: "NPC Safety and Environmental Service",
  },
  {
    id: 1,
    category: "training",
    icon: <PiCertificateFill />,
    year: "2017",
    title: "Basic Fire Fighting",
    desc: "PTT Saraburi Oil Terminal",
  },
];

export default TrainingData;
