import { Badge } from "./ui/badge";

const experiences = [
  {
    period: "2017 - Present",
    title: "Full Stack Developer",
    company: "Téléfaçage",
    description: "Development of web applications using modern technologies. Focus on responsive design and user experience.",
    skills: ["React", "Node.js", "MongoDB", "Angular"]
  },
  {
    period: "2015 - 2017",
    title: "Web Developer",
    company: "Rueban",
    description: "Created and maintained web applications, implemented new features and optimized performance.",
    skills: ["PHP", "MySQL", "JavaScript"]
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
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <div className="text-primary mb-2">{exp.company}</div>
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