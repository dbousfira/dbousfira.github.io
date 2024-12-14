import { Badge } from "./ui/badge";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "03/2022 - 03/2024",
    title: "Data Consultant",
    company: "Coexya",
    location: "St-Didier-au-Mont-d'Or",
    description: [
      "Design of APIs and web apps for data visualization",
      "Identification of key performance indicators",
      "Development of Power BI reports",
      "Facilitation of client workshops and writing reports",
      "Data governance with Microsoft Purview"
    ],
    skills: ["ASP.NET", "Vue.js", "Power BI", "Git"]
  },
  {
    period: "02/2021 - 02/2022",
    title: "Data Scientist Apprentice",
    company: "Crédit Agricole",
    location: "Clermont-Ferrand",
    description: [
      "Analysis and processing of data to improve customer knowledge",
      "Enhancement of personalized marketing campaign performance",
      "Customer scoring implementation",
      "Customer segmentation using classification and clustering methods"
    ],
    skills: ["SAS", "Python", "R", "Plotly JS", "Git", "Power BI"]
  },
  {
    period: "10/2017 - 04/2019",
    title: "Full Stack Web Developer",
    company: "ToManage",
    location: "Issoire",
    description: [
      "Development of modules for an ERP system",
      "Implementation of new features",
      "Maintenance and optimization of existing modules"
    ],
    skills: ["MongoDB", "AngularJS", "Node.js", "Bootstrap", "Git", "C"]
  }
];

const Experience = () => {
  return (
    <section className="py-16 px-4" id="experience">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                {exp.title}
              </h3>
              <div className="text-primary mb-1">{exp.company}</div>
              <div className="text-sm text-muted-foreground mb-2">{exp.location}</div>
              <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;