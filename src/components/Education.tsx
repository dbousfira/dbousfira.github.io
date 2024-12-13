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
              Développeur en intelligence artificielle
            </h3>
            <div className="text-primary mb-1">École IA Microsoft</div>
            <div className="text-sm text-muted-foreground mb-2">Lyon</div>
            <p className="text-muted-foreground mb-4">
              Titre de niveau 6 (bac+4)
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2017</div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              DUT Informatique
            </h3>
            <div className="text-primary mb-1">IUT de Clermont-Fd</div>
            <div className="text-sm text-muted-foreground mb-2">Lyon</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2014</div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Baccalauréat S-SVT
            </h3>
            <div className="text-primary mb-1">Lycée Jean-Paul Sartre</div>
            <div className="text-sm text-muted-foreground mb-2">Bron</div>
            <p className="text-muted-foreground mb-4">
              Spécialité ISN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;