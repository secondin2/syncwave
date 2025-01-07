const Strategies = () => {
    const strategies = [
      {
        title: "Automação de Notificações",
        description:
          "Elimine atrasos e falhas manuais com automação via telefone, SMS e WhatsApp.",
      },
      {
        title: "Escalonamento Inteligente",
        description:
          "Regras automatizadas priorizam e escalam incidentes, otimizando recursos.",
      },
      {
        title: "Rastreabilidade e Organização",
        description:
          "Registro automático das ações realizadas para total controle e transparência.",
      },
    ];
  
    return (
      <section className="py-16 bg-light text-dark text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Estratégias para Aumento de Desempenho
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Strategies;
  