'use client'

import { Code2, Palette, Zap, Coffee } from 'lucide-react'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'PostgreSQL', level: 75 },
]

const highlights = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Escrevo código legível, testável e bem documentado.',
  },
  {
    icon: Palette,
    title: 'Design Focado',
    description: 'Interfaces que equilibram estética e funcionalidade.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização para carregamento rápido e UX fluida.',
  },
  {
    icon: Coffee,
    title: 'Dedicação',
    description: 'Comprometido com entregas de alta qualidade.',
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre Mim</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Bio */}
          <div className="space-y-6">
            {/* Code block style bio */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">const</span> <span className="text-accent">developer</span> = {'{'}
              </div>
              
              <div className="pl-6 space-y-4 text-foreground/90">
                <p className="leading-relaxed">
                  <span className="font-mono text-muted-foreground">bio:</span> {'"'}Sou um desenvolvedor apaixonado por criar experiências digitais que combinam 
                  tecnologia de ponta com design intuitivo.{'"'},
                </p>
                <p className="leading-relaxed">
                  <span className="font-mono text-muted-foreground">journey:</span> {'"'}Comecei a programar há mais de 5 anos e desde então venho 
                  transformando ideias em produtos que impactam positivamente a vida das pessoas.{'"'},
                </p>
                <p className="leading-relaxed">
                  <span className="font-mono text-muted-foreground">philosophy:</span> {'"'}Acredito que o melhor código é aquele que resolve problemas 
                  reais de forma elegante e sustentável.{'"'}
                </p>
              </div>
              
              <div className="font-mono text-sm text-muted-foreground mt-4">
                {'}'};
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <h3 className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                skills.map()
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+', label: 'Anos de Exp.' },
                { value: '50+', label: 'Projetos' },
                { value: '30+', label: 'Clientes' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg border border-border/50 bg-card/30"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
