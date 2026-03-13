export default function Reservations() {
  return (
    <section className="reservations" id="reserva">
      <div>
        <h2 className="res-title">
          Reserve<br />
          sua<br />
          <em>aventura</em>
        </h2>
        <p className="res-subtitle">
          O Baratie acolhe grupos de 2 a 12 pessoas. Para eventos especiais e grupos maiores, entre em contato diretamente com nossa equipe de curadoria de experiências.
        </p>
      </div>

      <div>
        <form className="res-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Nome</label>
              <input type="text" className="form-input" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input type="email" className="form-input" placeholder="seu@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Data</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Horário</label>
              <select className="form-select form-input">
                <option>12h00</option>
                <option>13h00</option>
                <option>13h30</option>
                <option>19h00</option>
                <option>19h30</option>
                <option>20h00</option>
                <option>20h30</option>
                <option>21h00</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Pessoas</label>
            <select className="form-select form-input">
              <option>2 pessoas</option>
              <option>3 pessoas</option>
              <option>4 pessoas</option>
              <option>5–6 pessoas</option>
              <option>7–8 pessoas</option>
              <option>9–12 pessoas</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Observações</label>
            <input
              type="text"
              className="form-input"
              placeholder="Alergias, ocasiões especiais, preferências..."
            />
          </div>

          <button type="submit" className="btn-submit">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
}