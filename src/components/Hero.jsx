import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <section className="h-auto bg-dark text-white flex flex-col items-center justify-center text-center px-6 pt-10 pb-16">
      {/* Logo do produto */}
      <img src={logo} alt="Logo NotifyX" className="w-48 h-auto mb-4" /> {/* Reduzi mb-4 */}
      
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Gerencie Incidentes com Eficiência</h1>
      
      {/* Descrição */}
      <p className="text-lg md:text-xl mb-6">
        Automatize, escale e rastreie incidentes em tempo real. Tenha controle total e melhore o
        desempenho do seu negócio.
      </p>
      
      {/* Botão de compra */}
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
