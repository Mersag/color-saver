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
        <input required type="color" className="farbeInput" />
        <input required type="text" className="hexInput" />
        <button className="colorButton">Add Color</button>
      </form>
    </div>
  );
}
