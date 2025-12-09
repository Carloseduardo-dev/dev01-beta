import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, Bot, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Automação via WhatsApp",
    description: "Bots inteligentes, captação de leads, respostas automáticas e integrações com seus sistemas.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Sites Profissionais",
    description: "Sites institucionais, landing pages e páginas de alta performance otimizadas para conversão.",
  },
  {
    icon: Bot,
    title: "Criação de Agentes de IA",
    description: "Agentes inteligentes para atendimento, vendas e suporte que trabalham 24 horas por dia.",
  },
  {
    icon: Zap,
    title: "Sites Estáticos e Páginas Rápidas",
    description: "Portfólios, microsites e landing pages com carregamento ultrarrápido e SEO otimizado.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Soluções completas para seu{" "}
            <span className="text-gradient">crescimento digital</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da automação ao desenvolvimento, oferecemos tudo que seu negócio precisa para se destacar no digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
