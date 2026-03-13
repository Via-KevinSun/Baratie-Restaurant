import RecipeCard from "../ui/RecipeCard";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-text">
        <p className="section-label">Nossa história</p>
        <h2 className="section-title">
          Uma viagem de<br />
          <em>sabor e aventura</em>
        </h2>
        <div className="about-body">
          <p>
            O Baratie nasceu no coração do mar — um restaurante flutuante onde cada prato conta uma história de viagem, descoberta e paixão pela culinária. Desde 1992, navegamos pelos quatro cantos do oceano em busca dos ingredientes mais raros e das técnicas mais refinadas.
          </p>
          <p>
            Assim como um bom caderno de receitas, o Baratie é uma coleção viva: cada chef que passa por aqui deixa sua marca, cada temporada traz novos ingredientes, cada cliente inspira uma nova criação. Somos, antes de tudo, contadores de histórias através da comida.
          </p>
          <p>Nosso menu é atualizado a cada estação, sempre respeitando o ritmo do oceano e os produtos da terra que ele abraça.</p>
        </div>
      </div>

      <div className="about-visual">
        <RecipeCard />
      </div>
    </section>
  );
}