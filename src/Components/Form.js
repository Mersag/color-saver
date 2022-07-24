import "./Form.css";
export default function Form({ color }) {
  return (
    <div className="FormContainer">
      <form
        className="Color-Card cardForm"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input type="color" className="farbeInput" />
        <input type="text" className="hexInput" />
        <button label="colorButton">Add Color</button>
      </form>
    </div>
  );
}
