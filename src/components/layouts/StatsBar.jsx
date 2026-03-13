export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-number">32</span>
        <span className="stat-label">Anos no Mar</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">847</span>
        <span className="stat-label">Receitas no Caderno</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">4</span>
        <span className="stat-label">Estrelas Michelin</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">12k</span>
        <span className="stat-label">Clientes por Mês</span>
      </div>
    </div>
  );
}