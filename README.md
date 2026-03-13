<div align="center">

# 🍽️ Baratie Restaurant

**Site institucional de um restaurante marítimo sofisticado, construído com React + Vite.**

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Ver Demo](#) · [Reportar Bug](https://github.com/Via-KevinSun/Baratie-Restaurant/issues) · [Sugerir Feature](https://github.com/Via-KevinSun/Baratie-Restaurant/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Inspiração](#-inspiração)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes)
- [Design System](#-design-system)
- [Instalação e Uso](#-instalação-e-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Responsividade](#-responsividade)
- [Créditos](#-créditos)
- [Licença](#-licença)

---

## 🌊 Sobre o Projeto

O **Baratie** é um site institucional completo para um restaurante marítimo sofisticado. O projeto foi pensado como uma vitrine digital elegante que traduz a experiência de um bistrô à beira-mar: desde a identidade visual com tons de creme, ferrugem e dourado, até a curadoria de conteúdo que remete à tradição de um caderno de receitas artesanal.

O site conta com as seguintes seções funcionais:

- **Hero** — apresentação impactante com ilustração SVG composta e chamadas para ação
- **Barra de Estatísticas** — métricas do restaurante em destaque (anos de história, receitas, estrelas Michelin)
- **Sobre** — história do restaurante com cartão de receita ilustrativo
- **Menu** — grade de categorias com pratos e preços
- **Chef** — perfil do chef executivo com retrato em SVG e citação
- **Caderno de Receitas** — seção de técnicas culinárias inspirada nos *Cookbooks*
- **Reservas** — formulário funcional de reserva de mesa
- **Footer** — rodapé completo com navegação, horários e contato

---

## 💡 Inspiração

Este projeto foi desenvolvido tendo como referência os **[Anthropic Claude Cookbooks](https://github.com/anthropics/anthropic-cookbook)** — uma coleção de notebooks e receitas que apresenta formas divertidas e eficazes de usar o Claude.

A metáfora do *cookbook* permeia toda a identidade do Baratie:

> Assim como o repositório da Anthropic documenta técnicas e abordagens de IA de forma clara e acessível, o Baratie documenta suas receitas culinárias com o mesmo cuidado e paixão — transformando ingredientes simples em experiências inesquecíveis.

Cada seção do site pode ser lida como um "capítulo" desse caderno:
- as **entradas** são o ponto de partida
- os **pratos principais** são o coração do projeto
- a seção **Caderno** homenageia diretamente o formato de cookbook com técnicas numeradas

O protótipo HTML original do site foi gerado com o auxílio do **Claude (Anthropic)** e posteriormente estruturado em componentes React.

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://reactjs.org/) | 18+ | Biblioteca de UI e componentização |
| [Vite](https://vitejs.dev/) | 5+ | Build tool e servidor de desenvolvimento |
| [JavaScript (ES2022)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | — | Lógica de componentes |
| [CSS3 (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS) | — | Estilização com variáveis globais |
| [Google Fonts](https://fonts.google.com/) | — | Playfair Display, Cormorant Garamond, DM Mono |
| [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) | — | Ilustrações inline (hero, chef, decorações) |

---

## 📁 Estrutura do Projeto

```
baratie-restaurant/
│
├── public/                         # Assets estáticos públicos
│
├── src/
│   ├── components/                 # Todos os componentes reutilizáveis ou de interface
│   │   │
│   │   ├── layout/                 # Componentes de layout global (aparecem em várias páginas)
│   │   │   ├── Nav.jsx             # Barra de navegação fixa com links âncora
│   │   │   ├── Footer.jsx          # Rodapé com navegação, horários, endereço e copyright
│   │   │   └── StatsBar.jsx        # Faixa de estatísticas (anos, receitas, estrelas, clientes)
│   │   │
│   │   ├── sections/               # Seções principais da página (cada uma = um <section>)
│   │   │   ├── Hero.jsx            # Seção hero com dois painéis (escuro + claro) e CTAs
│   │   │   ├── HeroIllustration.jsx# SVG composto do prato com utensílios (isolado do Hero)
│   │   │   ├── About.jsx           # História do restaurante + cartão de receita
│   │   │   ├── MenuSection.jsx     # Wrapper da seção menu com cabeçalho e grade
│   │   │   ├── MenuCategory.jsx    # Categoria individual do menu (entradas, pratos, sobremesas)
│   │   │   ├── ChefSection.jsx     # Perfil do chef com retrato SVG, citação e biografia
│   │   │   ├── CookbookSection.jsx # Grade de técnicas culinárias (6 itens)
│   │   │   └── Reservations.jsx    # Formulário de reserva de mesa
│   │   │
│   │   ├── ui/                     # Componentes atômicos / reutilizáveis pequenos
│   │   │   └── RecipeCard.jsx      # Cartão de receita com ingredientes e quantidades
│   │   │
│   │   └── cookbook/               # Componentes específicos da seção cookbook
│   │       └── CookbookItem.jsx    # Item individual do caderno (número, título, descrição, tag)
│   │
│   ├── pages/                      # Páginas completas da aplicação
│   │   └── Home.jsx                # Página inicial — monta todas as seções em ordem
│   │
│   ├── styles/                     # Estilos globais
│   │   └── global.css              # Variáveis CSS, reset, tipografia e estilos base
│   │
│   ├── App.jsx                     # Componente raiz da aplicação
│   └── main.jsx                    # Ponto de entrada — monta React no DOM
│
├── index.html                      # Template HTML base do Vite
├── vite.config.js                  # Configuração do Vite
├── package.json                    # Dependências e scripts
└── README.md                       # Este arquivo
```

---

## 🧩 Componentes

### Layout

#### `Nav.jsx`
Barra de navegação fixada no topo da página. Contém o logotipo do Baratie e links de âncora para cada seção. Em telas menores, os links são ocultados.

```jsx
// Exemplo de uso
<Nav />
```

#### `Footer.jsx`
Rodapé completo com quatro colunas: brand/tagline, navegação, horários de funcionamento e endereço/contato. Inclui linha de copyright.

#### `StatsBar.jsx`
Faixa com fundo escuro exibindo quatro métricas do restaurante: anos de experiência, receitas no caderno, estrelas Michelin e clientes mensais.

---

### Sections

#### `Hero.jsx`
Seção principal de entrada da página. Divide-se em dois painéis:
- **Painel esquerdo** (fundo oceano `#2A4A5E`): título, tagline e botões CTA
- **Painel direito** (fundo creme): renderiza o `<HeroIllustration />`

Props: nenhuma — conteúdo estático.

#### `HeroIllustration.jsx`
SVG inline composto com prato, utensílios, guarnições e texto decorativo. Isolado do `Hero` para facilitar manutenção e eventual substituição por imagem real.

#### `About.jsx`
Seção "Nossa História" com texto em duas colunas. Utiliza o componente `<RecipeCard />` na coluna direita.

#### `MenuSection.jsx`
Wrapper da seção de menu. Renderiza cabeçalho e a grade com três `<MenuCategory />`.

#### `MenuCategory.jsx`
Componente de categoria do menu. Recebe props para título, descrição e lista de itens.

| Prop | Tipo | Descrição |
|---|---|---|
| `number` | `string` | Número da categoria (ex: `"01"`) |
| `title` | `string` | Nome da categoria |
| `description` | `string` | Descrição breve |
| `items` | `array` | Lista de objetos `{ name, price }` |

#### `ChefSection.jsx`
Seção de perfil do chef. Contém retrato em SVG inline, citação com bloco decorativo e biografia em texto.

#### `CookbookSection.jsx`
Grade 3×2 de técnicas culinárias. Renderiza seis instâncias de `<CookbookItem />`.

#### `Reservations.jsx`
Formulário de reserva com campos: nome, e-mail, data, horário, número de pessoas e observações.

---

### UI

#### `RecipeCard.jsx`
Cartão de receita estilizado como papel de caderno (levemente rotacionado, borda tracejada). Recebe lista de ingredientes.

| Prop | Tipo | Descrição |
|---|---|---|
| `title` | `string` | Nome da receita |
| `ingredients` | `array` | Lista de objetos `{ name, quantity }` |
| `pageRef` | `string` | Referência de página do caderno |

---

### Cookbook

#### `CookbookItem.jsx`
Card individual do caderno com número, título, descrição e tag de categoria.

| Prop | Tipo | Descrição |
|---|---|---|
| `number` | `string` | Código da receita (ex: `"001"`) |
| `title` | `string` | Título da técnica |
| `description` | `string` | Descrição da técnica |
| `tag` | `string` | Categoria (ex: `"Técnica Clássica"`) |

---

## 🎨 Design System

Todas as variáveis de design são definidas em `src/styles/global.css` e acessíveis em qualquer componente.

### Paleta de Cores

| Variável | Hex | Uso |
|---|---|---|
| `--cream` | `#F5EFE0` | Background principal |
| `--warm` | `#EDE4CE` | Background secundário / seções alternadas |
| `--ink` | `#1A1208` | Texto principal, backgrounds escuros |
| `--rust` | `#9B3A1A` | Cor de destaque primária (CTAs, labels) |
| `--gold` | `#C8922A` | Cor de destaque secundária (números, preços) |
| `--sand` | `#D4B483` | Tons de suporte |
| `--sea` | `#2A4A5E` | Painel hero, fundos de contraste |
| `--fog` | `#8BA3B0` | Textos secundários sobre fundo escuro |
| `--paper` | `#FAF6EC` | Cards e superfícies elevadas |

### Tipografia

| Fonte | Peso | Uso |
|---|---|---|
| Playfair Display | 400, 700, 900 | Títulos, logotipo, números decorativos |
| Cormorant Garamond | 300, 400, 600 (+ itálico) | Corpo de texto, taglines, descrições |
| DM Mono | 300, 400 | Labels, preços, badges, metadados |

### Animações

- `fadeUp` — entrada suave de elementos (opacity + translateY), usada no Hero
- `waveMove` — movimento horizontal lento aplicado às ondas decorativas SVG

---

## 🚀 Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) v9+ ou [yarn](https://yarnpkg.com/) v1.22+

### Passos

**1. Clone o repositório**

```bash
git clone https://github.com/Via-KevinSun/Baratie-Restaurant.git
cd Baratie-Restaurant
```

**2. Instale as dependências**

```bash
npm install
# ou
yarn install
```

**3. Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

**4. Acesse no navegador**

```
http://localhost:5173
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Desenvolvimento | `npm run dev` | Inicia o servidor local com hot-reload |
| Build | `npm run build` | Gera a versão otimizada para produção em `/dist` |
| Preview | `npm run preview` | Pré-visualiza o build de produção localmente |
| Lint | `npm run lint` | Verifica o código com ESLint |

---

## 📱 Responsividade

O layout foi projetado com CSS Grid e breakpoints definidos via media queries. Os principais pontos de quebra são:

| Breakpoint | Comportamento |
|---|---|
| `> 900px` | Layout de duas colunas em Hero, About, Chef e Reservas; grade 3×2 em Menu e Cookbook |
| `≤ 900px` | Todas as grades colapsam para coluna única; navegação simplificada |

---

## 👤 Créditos

Desenvolvido por **[Kevin Sun](https://github.com/Via-KevinSun)**.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <sub>Feito com ☕ e paixão pela culinária — Baratie © 2024</sub>
</div>