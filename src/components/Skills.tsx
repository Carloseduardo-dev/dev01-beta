const skills = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "Automação",
  "IA",
  "Chatbots",
  "Firebase",
  "APIs",
  "Integrações complexas",
];

export function Skills() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold hover:text-[#21e378]">
            Tecnologias que dominamos
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default hover:text-[#21e378]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
