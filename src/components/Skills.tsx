const skills = [
  { name: "Web Development", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "React/Angular", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Database Management", level: 75 }
];

const Skills = () => {
  return (
    <section className="py-16 bg-muted/30 px-4" id="skills">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;