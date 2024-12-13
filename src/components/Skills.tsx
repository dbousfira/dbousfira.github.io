const skills = [
  { 
    name: "Data Science", 
    level: 90,
    details: "Machine/Deep Learning (NLP, Computer Vision), statistics, data collection and analysis, pre-processing, frameworks (TensorFlow, Keras)"
  },
  { 
    name: "Analytics & Programming", 
    level: 95,
    details: "Python (Django, Scikit-learn, Pandas, Matplotlib, Numpy, Seaborn), R, SAS, Shell, C, Arduino"
  },
  { 
    name: "Web Development", 
    level: 85,
    details: "HTML5, CSS3, PHP7, ASP.NET, JavaScript (jQuery, AngularJS, Vue.js, React), Node.js, Express.js"
  },
  { 
    name: "Data Visualization & Cloud", 
    level: 80,
    details: "Shiny, Power BI, Tableau, GAE, Azure, ETL (Azure Data Factory, Talend)"
  },
  { 
    name: "Database Management", 
    level: 95,
    details: "SQL, Oracle (PL/SQL, Pro*C), MongoDB, JPA, Redis"
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-muted/30 px-4" id="skills">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full mb-2">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;