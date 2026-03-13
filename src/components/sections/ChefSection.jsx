export default function ChefSection() {
  return (
    <section className="chef-section" id="chef">
      <div>
        <div className="chef-portrait">
          <svg viewBox="0 0 400 540" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="540" fill="#2A4A5E" />
            <path
              d="M0 400 Q50 370 100 400 Q150 430 200 400 Q250 370 300 400 Q350 430 400 400 L400 540 L0 540 Z"
              fill="rgba(200,146,42,0.08)"
            />
            <path
              d="M0 440 Q50 410 100 440 Q150 470 200 440 Q250 410 300 440 Q350 470 400 440 L400 540 L0 540 Z"
              fill="rgba(200,146,42,0.05)"
            />
            <rect x="148" y="80" width="104" height="70" rx="12" fill="white" opacity="0.9" />
            <rect x="138" y="140" width="124" height="20" rx="4" fill="white" opacity="0.9" />
            <ellipse cx="200" cy="200" rx="70" ry="80" fill="#D4A060" />
            <path d="M130 175 Q140 130 200 120 Q260 130 270 175" fill="#3a1f00" />
            <ellipse cx="178" cy="190" rx="8" ry="9" fill="#1A1208" />
            <ellipse cx="222" cy="190" rx="8" ry="9" fill="#1A1208" />
            <circle cx="181" cy="187" r="2.5" fill="white" />
            <circle cx="225" cy="187" r="2.5" fill="white" />
            <path
              d="M196 205 Q200 215 204 205"
              fill="none"
              stroke="#3a1f00"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M184 225 Q200 238 216 225"
              fill="none"
              stroke="#3a1f00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M183 218 Q191 222 200 219 Q209 222 217 218"
              fill="none"
              stroke="#3a1f00"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect x="180" y="275" width="40" height="35" fill="#D4A060" />
            <path
              d="M80 540 L80 340 Q100 310 160 300 L200 315 L240 300 Q300 310 320 340 L320 540 Z"
              fill="white"
              opacity="0.92"
            />
            <path
              d="M200 315 L160 300 L140 370 L200 380 Z"
              fill="rgba(200,146,42,0.2)"
            />
            <path
              d="M200 315 L240 300 L260 370 L200 380 Z"
              fill="rgba(200,146,42,0.2)"
            />
            <circle cx="200" cy="360" r="4" fill="rgba(26,18,8,0.15)" />
            <circle cx="200" cy="385" r="4" fill="rgba(26,18,8,0.15)" />
            <circle cx="200" cy="410" r="4" fill="rgba(26,18,8,0.15)" />
            <path
              d="M80 340 Q50 390 55 450 Q60 480 90 490 L120 485 Q100 460 110 420 L160 360 Z"
              fill="white"
              opacity="0.92"
            />
            <path
              d="M320 340 Q350 390 345 450 Q340 480 310 490 L280 485 Q300 460 290 420 L240 360 Z"
              fill="white"
              opacity="0.92"
            />
            <rect
              x="155"
              y="440"
              width="90"
              height="38"
              rx="4"
              fill="rgba(200,146,42,0.25)"
              stroke="rgba(200,146,42,0.5)"
              strokeWidth="0.5"
            />
            <text
              x="200"
              y="460"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="10"
              fill="rgba(245,239,224,0.8)"
              fontStyle="italic"
            >
              Chef Sanji
            </text>
            <text
              x="200"
              y="472"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="7"
              fill="rgba(245,239,224,0.5)"
              letterSpacing="1"
            >
              BARATIE
            </text>
          </svg>
        </div>
      </div>

      <div>
        <p className="section-label">O Chef</p>
        <h2 className="section-title">
          Uma vida<br />
          <em>dedicada ao mar</em>
        </h2>

        <div className="chef-quote-block">
          <blockquote className="chef-quote">
            "Nunca desperdiço comida. Cada ingrediente tem uma história, e meu dever é contá-la com respeito e paixão."
          </blockquote>
          <p className="chef-name">— Chef Sanji Vinsmoke, Chef Executivo</p>
        </div>

        <div className="chef-bio">
          <p>
            Formado nas melhores cozinhas da Europa, Chef Sanji encontrou seu verdadeiro lar nas cozinhas flutuantes do Baratie aos 19 anos. Com mais de duas décadas de experiência, ele transformou cada prato numa poesia culinária que honra a tradição marítima e abraça a inovação.
          </p>
          <p>
            Seu caderno de receitas — a verdadeira alma do restaurante — conta hoje com mais de 847 criações únicas, documentadas com a mesma precisão e carinho que um cartógrafo usa para mapear mares desconhecidos.
          </p>
        </div>
      </div>
    </section>
  );
}