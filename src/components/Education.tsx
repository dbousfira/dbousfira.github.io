import { Badge } from "./ui/badge";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-16 px-4" id="education">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2022</div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              AI Developer
            </h3>
            <div className="text-primary mb-1">Microsoft AI School</div>
            <div className="text-sm text-muted-foreground mb-2">Lyon</div>
            <p className="text-muted-foreground mb-4">
              Level 6 qualification (Bachelor's degree +1)
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2017</div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Technical Degree in Computer Science
            </h3>
            <div className="text-primary mb-1">IUT of Lyon</div>
            <div className="text-sm text-muted-foreground mb-2">Lyon</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2014</div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Scientific Baccalaureate
            </h3>
            <div className="text-primary mb-1">Jean-Paul Sartre High School</div>
            <div className="text-sm text-muted-foreground mb-2">Bron</div>
            <p className="text-muted-foreground mb-4">
              Computer Science Specialization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;