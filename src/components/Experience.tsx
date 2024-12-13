import { Badge } from "./ui/badge";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "03/2022 - 03/2024",
    title: "Consultant Data",
    company: "Coexya",
    location: "St-Didier-au-Mont-d'Or",
    description: "Conception d'API et web app pour la dataviz, identification des indicateurs clés de performance, élaboration de rapports Power BI, animation des ateliers avec le client et rédaction des comptes rendus, gouvernance de la donnée avec Microsoft Purview",
    skills: ["ASP.NET", "Vue.js", "Power BI", "Git"]
  },
  {
    period: "02/2021 - 02/2022",
    title: "Alternant Data Scientist",
    company: "Crédit Agricole",
    location: "Lyon",
    description: "Analyse et traitement des données pour améliorer la connaissance client et la performance des campagnes marketing personnalisées. Scoring clients et segmentation via méthodes de classification et clustering.",
    skills: ["SAS", "Python", "R", "Plotly JS", "Git", "Power BI"]
  },
  {
    period: "10/2017 - 04/2019",
    title: "Développeur web full-stack",
    company: "ToManage",
    location: "Issoire",
    description: "Développement de modules pour un ERP",
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