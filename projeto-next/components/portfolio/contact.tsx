'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Send, Terminal } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:seu@email.com', label: 'Email' },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contato" className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contato</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias interessantes. 
            Se você tem um projeto em mente ou apenas quer trocar uma ideia, 
            <span className="text-primary"> vamos conversar</span>!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal-style contact info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border/50 bg-card/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">contact.sh</span>
              </div>
              
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">cat contact_info.txt</span>
                </div>
                <div className="pl-4 space-y-2 text-foreground/90">
                  <p><span className="text-accent">email:</span> seu@email.com</p>
                  <p><span className="text-accent">location:</span> Brasil</p>
                  <p><span className="text-accent">status:</span> <span className="text-primary">Disponível para projetos</span></p>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">echo &quot;Aguardando sua mensagem...&quot;</span>
                  <span className="animate-blink text-primary">_</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-lg border border-border/50 bg-card/50 p-6">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">Obrigado pelo contato. Responderei em breve.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-sm text-primary hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-sm text-muted-foreground">
                    nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-sm text-muted-foreground">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-sm text-muted-foreground">
                    mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
