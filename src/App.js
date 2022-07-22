import "./App.css";
import ColorCard from "./Component/ColorCard.js";

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

  const mappedArray = colors.map((color) => {
    return (
      <ColorCard
        key={color.id + "-" + color.name}
        text={color.id}
        color={color.color}
      />
    );
  });
}
