import "./ColorCard.css";
export default function ColorCard({ color }) {
  return (
    <div className="Color-Card" style={{ backgroundColor: color }}>
      <button
        className="ColorHex"
        onClick={() => {
          navigator.clipboard.writeText(color).then(() => {
            alert("Der Hex ist kopiert");
          });
        }}
      >
        {color}
      </button>
    </div>
  );
}
