export default function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="recipe-card-title">Receita do Chef</div>
      <div className="recipe-ingredient">
        <span>Robalo do Atlântico</span>
        <span className="recipe-qty">200g</span>
      </div>
      <div className="recipe-ingredient">
        <span>Manteiga de nori</span>
        <span className="recipe-qty">40g</span>
      </div>
      <div className="recipe-ingredient">
        <span>Fumet de crustáceos</span>
        <span className="recipe-qty">80ml</span>
      </div>
      <div className="recipe-ingredient">
        <span>Microverdes do jardim</span>
        <span className="recipe-qty">à gosto</span>
      </div>
      <div className="recipe-ingredient">
        <span>Flor de sal marinho</span>
        <span className="recipe-qty">pitada</span>
      </div>
      <div className="recipe-ingredient">
        <span>Limão caviar</span>
        <span className="recipe-qty">6 esferas</span>
      </div>
      <div className="recipe-ingredient">
        <span>Azeite de ervas do porto</span>
        <span className="recipe-qty">30ml</span>
      </div>
      <div className="recipe-footer">Caderno do Baratie — Pág. 47</div>
    </div>
  );
}