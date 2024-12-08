import { Badge } from "./ui/badge";

const Education = () => {
  return (
    <section className="py-16 px-4" id="education">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">2015 - 2017</div>
            <h3 className="text-xl font-semibold mb-2">DUT Informatique</h3>
            <div className="text-primary mb-2">IUT de Brest</div>
            <p className="text-muted-foreground mb-4">
              Specialized in software development and web technologies
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Software Development</Badge>
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Database Management</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;