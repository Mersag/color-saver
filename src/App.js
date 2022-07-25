import { buildQueries } from "@testing-library/react";
import { useState } from "react";

import "./App.css";
import ColorCard from "./Components/ColorCard";
import Form from "./Components/Form";

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
  function addNewColor(newColor) {
    setColors([
      ...colors,
      {
        id: newColor,
        name: "blue",
      },
    ]);
  }
  //const [newColor, setNewColor] = usestate(““)
  //function handleSubmit(event) {}

  return (
    <div className="page">
      <h1>Color Saver App </h1>
      <h2>Add new Colors</h2>
      <Form onSubmit={addNewColor} />

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
