import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground py-8">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Mario Ciardulli
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/mariociardulli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
