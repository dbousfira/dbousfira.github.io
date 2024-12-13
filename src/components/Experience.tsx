import { Badge } from "./ui/badge";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "03/2022 - 03/2024",
    title: "Data Consultant",
    company: "Coexya",
    location: "St-Didier-au-Mont-d'Or",
    description: "Design of APIs and web apps for data visualization, identification of key performance indicators, development of Power BI reports, facilitation of client workshops and writing reports, data governance with Microsoft Purview",
    skills: ["ASP.NET", "Vue.js", "Power BI", "Git"]
  },
  {
    period: "02/2021 - 02/2022",
    title: "Data Scientist Apprentice",
    company: "Crédit Agricole",
    location: "Lyon",
    description: "Analysis and processing of data to improve customer knowledge and personalized marketing campaign performance. Customer scoring and segmentation using classification and clustering methods.",
    skills: ["SAS", "Python", "R", "Plotly JS", "Git", "Power BI"]
  },
  {
    period: "10/2017 - 04/2019",
    title: "Full Stack Web Developer",
    company: "ToManage",
    location: "Issoire",
    description: "Development of modules for an ERP system",
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
              <p className="text-muted-foreground mb-4">{exp.description}</p>
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