import { useState } from "react";
import "./Form.css";
export default function Form({}) {
  const [color, setColor] = useState("#57E2E5");
  return (
    <div className="FormContainer">
      <form
        className="Color-Card cardForm"
        onSubmit={(event) => {
          event.preventDefault();
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
