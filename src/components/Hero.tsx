import { GraduationCap, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">DJAMEL BOUSFIRA</h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
      
      <div className="flex flex-col md:flex-row gap-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Brest, France</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
            contact@example.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span>DUT Informatique</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;