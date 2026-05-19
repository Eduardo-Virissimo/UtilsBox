"use client";

import { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e gestão de inventário em tempo real.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Sistema de analytics com visualizações interativas, relatórios personalizáveis e integração com múltiplas fontes de dados.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mobile App",
    description:
      "Aplicativo móvel para gestão de tarefas com sincronização em tempo real, notificações push e modo offline.",
    image: "/placeholder-project-3.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "CLI Tool",
    description:
      "Ferramenta de linha de comando para automação de tarefas de desenvolvimento.",
    tags: ["Node.js", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Design System",
    description:
      "Biblioteca de componentes reutilizáveis com documentação interativa.",
    tags: ["React", "Storybook"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "API Gateway",
    description: "Microsserviço para gerenciamento centralizado de APIs.",
    tags: ["Go", "Docker"],
    github: "https://github.com",
  },
  {
    title: "Chat Bot",
    description: "Bot inteligente com processamento de linguagem natural.",
    tags: ["Python", "TensorFlow"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Institucional",
    description:
      "Site para apresentar projetos, habilidades e contatos profissionais.",
    tags: ["Next.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "VS Code Extension",
    description: "Extensão para aumentar produtividade no VS Code.",
    tags: ["TypeScript", "VS Code API"],
    github: "https://github.com",
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projetos
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Featured projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project image/visual */}
              <div
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group">
                  {/* Terminal-style frame */}
                  <div className="rounded-lg overflow-hidden border border-border/50 bg-card/50">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                      <span className="w-3 h-3 rounded-full bg-red-400/60" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <span className="w-3 h-3 rounded-full bg-primary/60" />
                      <span className="ml-4 font-mono text-xs text-muted-foreground">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                      </span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 relative overflow-hidden">
                      {/* Animated code lines */}
                      <div className="absolute inset-0 p-6 font-mono text-sm opacity-30">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex gap-4"
                            style={{
                              opacity: hoveredIndex === index ? 1 : 0.5,
                              transform:
                                hoveredIndex === index
                                  ? "translateX(0)"
                                  : "translateX(-10px)",
                              transition: `all 0.3s ease ${i * 0.05}s`,
                            }}
                          >
                            <span className="text-muted-foreground/50 w-6 text-right">
                              {i + 1}
                            </span>
                            <span className="text-primary/50">
                              {i === 0 && "import { magic } from 'code'"}
                              {i === 2 && "export const Project = () => {"}
                              {i === 3 &&
                                "  const [amazing, setAmazing] = useState(true)"}
                              {i === 5 && "  return ("}
                              {i === 6 && "    <div className='innovation'>"}
                              {i === 7 && "      <Component />"}
                              {i === 8 && "    </div>"}
                              {i === 9 && "  )"}
                              {i === 10 && "}"}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            className="p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:text-primary transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.live}
                            className="p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:text-primary transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div
                className={`lg:col-span-6 lg:absolute ${
                  index % 2 === 1 ? "lg:left-0" : "lg:right-0"
                } lg:w-1/2`}
              >
                <div className={index % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}>
                  <span className="font-mono text-sm text-primary">
                    Projeto em Destaque
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-lg bg-card border border-border/50 shadow-xl mb-4">
                    <p className="font-mono text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-3 font-mono text-sm ${
                      index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">
            Outros Projetos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:-translate-y-2 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="font-mono text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
