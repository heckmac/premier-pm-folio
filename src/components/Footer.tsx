import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t divider py-12">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} Mario Ciardulli. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/mariociardulli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:mario.ciardulli@gmail.com"
            className="text-subtle hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
