const Products = () => {
    const services = [
      {
        title: "Recebimento de Alertas",
        description: "Integra-se com ferramentas de monitoramento para agir instantaneamente.",
      },
      {
        title: "Notificação Imediata",
        description:
          "Realiza chamadas, SMS e mensagens via WhatsApp para garantir comunicação rápida.",
      },
      {
        title: "Registro Automático",
        description:
          "Documenta tentativas de contato com data e hora para rastreabilidade total.",
      },
      {
        title: "Escalonamento Inteligente",
        description:
          "Direciona incidentes automaticamente com regras específicas para grupos de hosts.",
      }
    ];
  
    return (
      <section className="py-16 bg-white text-dark text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Produtos e Serviços</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Products;
  