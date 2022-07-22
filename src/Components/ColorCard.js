import "./ColorCard.css";
export default function ColorCard({ text, color }) {
  return (
    <p className="Color-Card" style={{ backgroundColor: color }}>
      <button>{text}</button>
    </p>
  );
}
