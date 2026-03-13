import MenuCategory from "./MenuCategory";

const menuData = [
  {
    number: "01",
    title: "Entradas do Mar",
    description: "Sabores frescos que anunciam a jornada que está por vir.",
    items: [
      { name: "Tartar de atum com ponzu", price: "R$ 68" },
      { name: "Ostras com granita de limão", price: "R$ 75" },
      { name: "Ceviche de vieiras", price: "R$ 62" },
      { name: "Bisque de lagostins", price: "R$ 54" },
    ],
  },
  {
    number: "02",
    title: "Pratos Principais",
    description: "O coração do nosso caderno — receitas desenvolvidas ao longo de décadas.",
    items: [
      { name: "Robalo com manteiga de nori", price: "R$ 145" },
      { name: "Lagosta thermidor revisitada", price: "R$ 285" },
      { name: "Risoto negro de lula", price: "R$ 128" },
      { name: "Filé ao molho de vinho do mar", price: "R$ 165" },
    ],
  },
  {
    number: "03",
    title: "Sobremesas",
    description: "O último capítulo — doce e inesquecível como toda boa história.",
    items: [
      { name: "Sorvete de sal e caramelo", price: "R$ 42" },
      { name: "Tarte tatin de maçã da ilha", price: "R$ 48" },
      { name: "Chocolate com alga spirulina", price: "R$ 45" },
      { name: "Parfait de baunilha do mar", price: "R$ 52" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <p className="section-label">Nossas criações</p>
        <h2 className="section-title">
          O Caderno de<br />
          <em>Receitas</em>
        </h2>
      </div>

      <div className="menu-grid">
        {menuData.map((category) => (
          <MenuCategory key={category.number} {...category} />
        ))}
      </div>
    </section>
  );
}