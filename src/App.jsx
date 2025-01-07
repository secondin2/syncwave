import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Products from "./components/Products";
import Strategies from "./components/Strategies";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Seção de Apresentação do Produto */}
      <Hero />
      
      {/* Seção sobre Desafios na Gestão de Incidentes */}
      <Challenges />
      
      {/* Seção sobre Produtos e Serviços */}
      <Products />
      
      {/* Seção com Estratégias para Aumento de Desempenho */}
      <Strategies />
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
