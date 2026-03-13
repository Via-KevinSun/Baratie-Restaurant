export default function MenuCategory({ number, title, description, items }) {
  return (
    <div className="menu-category">
      <span className="menu-cat-number">{number}</span>
      <h3 className="menu-cat-title">{title}</h3>
      <p className="menu-cat-desc">{description}</p>
      <ul className="menu-items">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-item-name">{item.name}</span>
            <span className="menu-item-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}