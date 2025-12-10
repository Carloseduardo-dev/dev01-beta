import { 
  Clock, 
  LayoutGrid, 
  TrendingUp, 
  Users, 
  Zap, 
  Settings, 
  DollarSign, 
  Repeat, 
  Heart, 
  Scale 
} from "lucide-react";

const benefits = [
  { icon: Clock, title: "Economia de tempo" },
  { icon: LayoutGrid, title: "Organização" },
  { icon: TrendingUp, title: "Aumento de produtividade" },
  { icon: Users, title: "Captação de leads automatizada" },
  { icon: Zap, title: "Agilidade no atendimento" },
  { icon: Settings, title: "Processos automáticos 24/7" },
  { icon: DollarSign, title: "Redução de custos operacionais" },
  { icon: Repeat, title: "Padronização de tarefas repetitivas" },
  { icon: Heart, title: "Melhor experiência para o cliente" },
  { icon: Scale, title: "Maior escalabilidade" },
];

export function Benefits() {
  return (
    <section id="vantagens" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 hover:text-[#21e378]">
            Por que escolher a{" "}
            <span className="text-gradient">Dev01</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme a forma como sua empresa opera com nossas soluções de automação e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-5 text-center hover-lift group hover:text-[#21e378] "
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium leading-tight">{benefit.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block glass-card rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-xl sm:text-2xl font-medium text-foreground hover:text-[#21e378]">
              "Tecnologia que trabalha por você, enquanto sua empresa{" "}
              <span className="text-gradient">cresce</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
