import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:seu@email.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      {/* Side decoration - vertical text */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6">
        <a
          href="mailto:seu@email.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors [writing-mode:vertical-lr]"
        >
          seu@email.com
        </a>
        <div className="w-px h-24 bg-border" />
      </div>

      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6">
        <div className="flex flex-col gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <div className="w-px h-24 bg-border" />
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4 font-mono text-sm text-muted-foreground">
          Portfolio de{" "}
          <span className="text-primary hover:underline cursor-pointer">
            Seu Nome
          </span>
        </div>

        <div className="font-mono text-xs text-muted-foreground/70">
          <span className="text-primary">const</span> year ={" "}
          <span className="text-accent">{new Date().getFullYear()}</span>;
        </div>
      </div>
    </footer>
  );
}
