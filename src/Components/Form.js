import { useState } from "react";
import "./Form.css";
export default function Form({ onSubmit }) {
  const [color, setColor] = useState("#FF0000");
  console.log(color);
  return (
    <div className="FormContainer">
      <form
        className="Color-Card cardForm"
        style={{ backgroundColor: color }}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(color);
        }}
      >
        <input
          type="color"
          className="farbeInput"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="text"
          className="hexInput"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <button label="colorButton">Add Color</button>
      </form>
    </div>
  );
}
