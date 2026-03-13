export default function CookbookItem({ number, title, description, tag }) {
  return (
    <div className="cookbook-item">
      <p className="cookbook-item-num">{number}</p>
      <h3 className="cookbook-item-title">{title}</h3>
      <p className="cookbook-item-desc">{description}</p>
      <span className="cookbook-tag">{tag}</span>
    </div>
  );
}