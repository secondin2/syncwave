const Testimonials = () => {
    const testimonials = [
      { name: "João Silva", text: "O NotifyX revolucionou a forma como falamos com nossos clientes!" },
      { name: "Ana Pereira", text: "Fácil de usar e altamente eficaz. Recomendo para qualquer empresa." },
      { name: "Carlos Lima", text: "Simplesmente o melhor sistema de notificações que já utilizei." },
    ];
  
    return (
      <section className="py-16 bg-light text-dark text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg">
              <p className="italic">"{testimonial.text}"</p>
              <h4 className="font-bold mt-4">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  