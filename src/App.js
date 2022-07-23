import "./App.css";
import ColorCard from "./Components/ColorCard";

export default function App() {
  const colors = [
    {
      id: "#e08dac",
      name: "Charme Pink",
    },
    {
      id: "#a586c4",
      name: "African Violet",
    },
    {
      id: "#8883d0",
      name: "Middle Blue Purple",
    },
    {
      id: "#7981d6",
      name: "Violet Blue Crayola",
    },
    {
      id: "#6a7fdb",
      name: "Glaucous",
    },
    {
      id: "#6a7fdb",
      name: "Blue Jeans",
    },
    {
      id: "#5ccae3",
      name: "Sky Blue Crayola",
    },
  ];

  return (
    <div className="Page">
      <h1>Color Saver App </h1>
      <h1>Add new Colors</h1>
      <div className="FormContainer">
        <form
          className="Color-Card cardForm"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input required type="color" className="farbeInput" />
          <input required type="text" className="hexInput" />
          <button className="colorButton">Add Color</button>
        </form>
      </div>

      <h1>Your Saved Colors</h1>

      <div className="Card-Container">
        {colors.map((color) => {
          return (
            <ColorCard key={color.id + "-" + color.name} color={color.id} />
          );
        })}
      </div>
    </div>
  );
}
