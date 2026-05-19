'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Coder'];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.75 0.18 145) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.75 0.18 145) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Decorative lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.75 0.18 145)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.75 0.18 145)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.75 0.18 145)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="100%" y1="20%" x2="0" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Terminal-style header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-mono text-sm text-muted-foreground ml-2">~/portfolio</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Olá, eu sou</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Eduardo
          </span>
        </h1>

        {/* Typing effect */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <span className="font-mono text-xl md:text-2xl text-muted-foreground">
            {'> '}
            <span className="text-primary">{displayText}</span>
            <span className="animate-blink text-primary">_</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Transformo ideias em experiências digitais únicas, combinando código limpo com design
          inovador para criar soluções que fazem a diferença.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projetos"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Projetos
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>

          <a
            href="#contato"
            className="px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary/50 transition-all"
          >
            Entre em Contato
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">scroll</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
    </section>
  );
}
