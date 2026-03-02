import logo from "@/assets/hayat-gym-logo.png";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Hayat Fitness Gym" className="h-16 mb-3" />
            <p className="text-muted-foreground text-sm">
              Strength, Discipline & Brotherhood
            </p>
          </div>

          <div>
            <h4 className="font-heading uppercase text-foreground mb-3 tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Membership", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-heading uppercase text-foreground mb-3 tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/hayat.fitness__/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="text-center text-muted-foreground text-xs">
          © 2026 Hayat Fitness Gym | Est. 2016 | Celebrating 10 Years | Kondhwa, Pune
        </p>
      </div>
    </footer>
  );
};

export default Footer;
