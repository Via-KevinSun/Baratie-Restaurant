import CookbookItem from "../cookbook/CookbookItem";

const cookbookData = [
  {
    number: "RECEITA — 001",
    title: "Técnica de Cura a Seco",
    description:
      "Aprenda como potencializar os sabores do peixe fresco com sal, açúcar e ervas. Uma técnica simples que transforma ingredientes do cotidiano em algo extraordinário.",
    tag: "Técnica Clássica",
  },
  {
    number: "RECEITA — 002",
    title: "Caldos e Fumet do Mar",
    description:
      "A base de toda grande cozinha marítima. Como extrair o máximo sabor das carcaças de crustáceos e espinhas de peixes para criar fundos complexos e aromáticos.",
    tag: "Bases da Cozinha",
  },
  {
    number: "RECEITA — 003",
    title: "Emulsões e Manteigas",
    description:
      "Da manteiga de nori ao beurre blanc de frutos do mar — guia completo sobre como criar emulsões estáveis que elevam qualquer prato a outro patamar.",
    tag: "Molhos & Texturas",
  },
  {
    number: "RECEITA — 004",
    title: "Fermentações Marinhas",
    description:
      "Garum de camarão, pasta de algas fermentadas, shoyu de frutos do mar. Descubra como a fermentação transforma resíduos em ingredientes de altíssimo valor gastronômico.",
    tag: "Fermentação",
  },
  {
    number: "RECEITA — 005",
    title: "Confits e Papilotes",
    description:
      "Métodos suaves de cocção que preservam a umidade e o sabor natural do pescado. Aprenda a controlar temperatura e tempo para resultados perfeitos e consistentes.",
    tag: "Cocção Suave",
  },
  {
    number: "RECEITA — 006",
    title: "Harmonização com Vinhos",
    description:
      "Do Chablis ao Vermentino — um guia prático e descomplicado sobre como escolher o vinho ideal para acompanhar cada prato do nosso caderno marítimo.",
    tag: "Vinhos & Pares",
  },
];

export default function CookbookSection() {
  return (
    <section className="cookbook-section" id="receitas">
      <div className="cookbook-header">
        <div>
          <p className="section-label">O caderno</p>
          <h2 className="section-title">
            Formas criativas<br />
            <em>de usar o mar</em>
          </h2>
        </div>
        <p className="cookbook-intro">
          Como um bom cookbook, o Baratie apresenta formas divertidas e eficazes de transformar ingredientes do oceano em experiências inesquecíveis à mesa.
        </p>
      </div>

      <div className="cookbook-grid">
        {cookbookData.map((item, index) => (
          <CookbookItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}