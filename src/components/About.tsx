import { Dev01Symbol } from "@/components/icons/Dev01Logo";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Dev01Symbol className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">O que fazemos*</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight underline hover:text-[#21e378]">
            Tecnologia que transforma{" "}
            <span className="text-gradient">ideias em resultados</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground underline text-[#21e378]">Dev01</strong> é uma empresa de tecnologia especializada em 
              automações inteligentes, desenvolvimento de agentes de IA e criação de soluções digitais modernas 
              para empresas que buscam escalar suas operações.
            </p>
            <p>
              Nossa missão é simplificar processos complexos através da automação, permitindo que nossos 
              clientes foquem no que realmente importa: o crescimento do seu negócio.
            </p>
            <p>
              Com expertise em desenvolvimento de bots para WhatsApp, criação de sites de alta performance 
              e implementação de agentes de IA, entregamos soluções que geram resultados mensuráveis e 
              impactam diretamente a produtividade e a receita das empresas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Inovação", desc: "Tecnologias de ponta para soluções modernas" },
              { title: "Eficiência", desc: "Processos otimizados para máxima performance" },
              { title: "Resultados", desc: "Foco em métricas e crescimento real" },
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift hover:text-[#21e378]">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground hover:text-[#21cddd]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
