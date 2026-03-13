// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <svg
          className="wave-decoration"
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid slice"
        >
          <g className="wave-path">
            <path
              d="M0 100 Q100 60 200 100 Q300 140 400 100 Q500 60 600 100 Q700 140 800 100 Q900 60 1000 100"
              fill="none"
              stroke="rgba(200,146,42,1)"
              strokeWidth="1.5"
            />
            <path
              d="M0 130 Q100 90 200 130 Q300 170 400 130 Q500 90 600 130 Q700 170 800 130 Q900 90 1000 130"
              fill="none"
              stroke="rgba(200,146,42,0.6)"
              strokeWidth="0.8"
            />
            <path
              d="M0 160 Q100 120 200 160 Q300 200 400 160 Q500 120 600 160 Q700 200 800 160"
              fill="none"
              stroke="rgba(200,146,42,0.3)"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        <p className="hero-eyebrow">Desde 1992 — Navegando sabores</p>
        <h1 className="hero-title">
          O melhor<br />
          <em>restaurante</em><br />
          do mar
        </h1>
        <p className="hero-tagline">
          Uma coleção de receitas inesquecíveis, preparadas com ingredientes selecionados e a paixão de quem vive no oceano.
        </p>
        <div className="hero-cta">
          <a href="#reserva" className="btn-primary">
            Reservar Mesa
          </a>
          <a href="#menu" className="btn-ghost">
            Ver o Menu
          </a>
        </div>
      </div>

      <div className="hero-right">
        <svg
          className="hero-illustration"
          viewBox="0 0 600 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background warm wash */}
          <rect width="600" height="700" fill="#EDE4CE" />

          {/* Decorative grid lines */}
          <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="600" y2="400" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="500" x2="600" y2="500" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="600" y2="600" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="700" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="700" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="700" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="700" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />
          <line x1="500" y1="0" x2="500" y2="700" stroke="rgba(26,18,8,0.04)" strokeWidth="0.5" />

          {/* Large decorative circle */}
          <circle cx="300" cy="350" r="220" fill="none" stroke="rgba(200,146,42,0.15)" strokeWidth="0.5" />
          <circle cx="300" cy="350" r="180" fill="none" stroke="rgba(200,146,42,0.1)" strokeWidth="0.5" />

          {/* Plate composition */}
          <ellipse cx="300" cy="370" rx="185" ry="12" fill="rgba(26,18,8,0.06)" />
          <circle cx="300" cy="340" r="170" fill="white" />
          <circle cx="300" cy="340" r="165" fill="none" stroke="rgba(26,18,8,0.06)" strokeWidth="1" />
          <circle cx="300" cy="340" r="130" fill="#F5EFE0" />

          {/* Food: Fish fillet shape */}
          <ellipse
            cx="300"
            cy="330"
            rx="85"
            ry="45"
            fill="#C8922A"
            opacity="0.75"
            transform="rotate(-15 300 330)"
          />
          <ellipse
            cx="300"
            cy="330"
            rx="80"
            ry="40"
            fill="#D4A060"
            opacity="0.5"
            transform="rotate(-15 300 330)"
          />

          {/* Herb garnish */}
          <circle cx="245" cy="295" r="8" fill="#3B6D11" opacity="0.7" />
          <circle cx="258" cy="285" r="5" fill="#3B6D11" opacity="0.6" />
          <circle cx="237" cy="283" r="6" fill="#639922" opacity="0.5" />

          {/* Sauce dots */}
          <circle cx="350" cy="310" r="4" fill="#9B3A1A" opacity="0.6" />
          <circle cx="365" cy="325" r="3" fill="#9B3A1A" opacity="0.5" />
          <circle cx="358" cy="342" r="5" fill="#9B3A1A" opacity="0.4" />

          {/* Microgreens */}
          <line x1="295" y1="310" x2="292" y2="290" stroke="#639922" strokeWidth="1" opacity="0.7" />
          <circle cx="292" cy="290" r="3" fill="#639922" opacity="0.6" />
          <line x1="305" y1="308" x2="308" y2="286" stroke="#639922" strokeWidth="1" opacity="0.6" />
          <circle cx="308" cy="286" r="4" fill="#3B6D11" opacity="0.5" />
          <line x1="316" y1="315" x2="320" y2="295" stroke="#639922" strokeWidth="1" opacity="0.5" />
          <circle cx="320" cy="295" r="3" fill="#639922" opacity="0.7" />

          {/* Utensils */}
          <line
            x1="120"
            y1="180"
            x2="110"
            y2="520"
            stroke="rgba(26,18,8,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="106" y="175" width="8" height="30" rx="4" fill="rgba(26,18,8,0.2)" />
          <line
            x1="480"
            y1="180"
            x2="490"
            y2="520"
            stroke="rgba(26,18,8,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="485"
            cy="190"
            rx="14"
            ry="22"
            fill="none"
            stroke="rgba(26,18,8,0.2)"
            strokeWidth="1.5"
          />

          {/* Text stamp */}
          <text
            x="300"
            y="570"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="11"
            fontStyle="italic"
            fill="rgba(26,18,8,0.2)"
            letterSpacing="3"
          >
            Baratie — Chef's Selection
          </text>

          {/* Corner ornament top-left */}
          <line x1="30" y1="30" x2="80" y2="30" stroke="rgba(200,146,42,0.3)" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="30" y2="80" stroke="rgba(200,146,42,0.3)" strokeWidth="0.5" />

          {/* Corner ornament bottom-right */}
          <line x1="520" y1="670" x2="570" y2="670" stroke="rgba(200,146,42,0.3)" strokeWidth="0.5" />
          <line x1="570" y1="670" x2="570" y2="620" stroke="rgba(200,146,42,0.3)" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}