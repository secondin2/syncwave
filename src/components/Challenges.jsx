const Challenges = () => {
    const challenges = [
      {
        title: "Processos",
        points: [
          "Processos Manuais Ineficientes: Lentos e suscetíveis a erros.",
          "Falta de Padronização: Gera inconsistências e prejudica o fluxo de trabalho.",
          "Dificuldade no Cumprimento de SLAs: Falhas comprometem prazos e entregas.",
          "Resposta Imediata Comprometida: Falta de agilidade afeta a satisfação do cliente.",
        ],
      },
      {
        title: "Pessoas",
        points: [
          "Escalonamento Inadequado: Incidentes não são tratados corretamente.",
          "Erros Humanos Frequentes: Falhas no tratamento de alertas.",
          "Gestão de Escalas Ineficiente: Jornadas longas e falta de cobertura.",
        ],
      },
      {
        title: "Clientes",
        points: [
          "Particularidades Diversas: Regras específicas por cliente.",
          "Adaptação Personalizada: Ajustes necessários para cada contrato.",
          "Gerenciamento Complexo: Múltiplos serviços simultâneos dificultam a operação.",
          "Comunicação Ineficiente: Falta de clareza nos status dos incidentes.",
        ],
      },
    ];
  
    return (
      <section className="py-16 bg-light text-dark px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Os Desafios na Gestão de Incidentes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <ul className="text-left">
                {item.points.map((point, idx) => (
                  <li key={idx} className="mb-2">• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Challenges;
  