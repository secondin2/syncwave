const Hero = () => {
    return (
      <section className="min-h-screen bg-dark text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Apresentamos o NotifyX</h1>
        <p className="text-lg md:text-xl mb-8">
          A solução perfeita para notificações rápidas e eficientes.
        </p>
        <a
          href="#comprar"
          className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg"
        >
          Comprar Agora
        </a>
      </section>
    );
  };
  
  export default Hero;
  