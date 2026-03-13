export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">Baratie</span>
          <p className="footer-tagline">
            "Uma coleção de receitas inesquecíveis, apresentadas com paixão e eficácia — do mar para a sua mesa."
          </p>
        </div>

        <div>
          <p className="footer-col-title">Navegação</p>
          <ul className="footer-links">
            <li><a href="#sobre">O Restaurante</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#chef">O Chef</a></li>
            <li><a href="#receitas">Caderno</a></li>
            <li><a href="#reserva">Reservas</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Horários</p>
          <ul className="footer-links">
            <li><a href="#">Almoço: 12h–15h</a></li>
            <li><a href="#">Jantar: 19h–23h</a></li>
            <li><a href="#">Seg–Sex</a></li>
            <li><a href="#">Sáb–Dom: 12h–00h</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Contato</p>
          <address className="footer-address">
            Porto do Baratie<br />
            Píer 7, Doca Leste<br />
            Rio de Janeiro — RJ<br /><br />
            (21) 9 9999-8888<br />
            reservas@baratie.com.br
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2024 Baratie Restaurante. Todos os direitos reservados.</p>
        <p className="footer-copy">Inspirado nos mares do mundo</p>
      </div>
    </footer>
  );
}