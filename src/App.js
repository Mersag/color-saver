import { useState } from "react";

import "./App.css";
import ColorCard from "./Components/ColorCard";

export default function App() {
  const [colors, setColors] = useState([
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
  ]);
  //const [newColor, setNewColor] = usestate(““)
  //function handleSubmit(event) {}

  return (
    <div className="page">
      <h1>Color Saver App </h1>
      <h2>Add new Colors</h2>
      <div className="FormContainer">
        <form
          className="Color-Card cardForm"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="color" className="colorInput" />
          <input type="text" className="hexInput" onChange="" />
          <button label="colorButton">Add Color</button>
        </form>
      </div>

      <h3>Your Saved Colors</h3>

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
