const Features = () => {
    const features = [
      { title: "Notificações Instantâneas", description: "Envie mensagens em tempo real." },
      { title: "Totalmente Personalizável", description: "Adapte ao estilo do seu negócio." },
      { title: "Segurança Garantida", description: "Proteja os dados do cliente." },
    ];
  
    return (
      <section className="py-16 bg-white text-dark text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Principais Recursos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  