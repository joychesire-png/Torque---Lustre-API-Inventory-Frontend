import { useState } from "react";

function CarForm({ onAddCar }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { make, model, year: parseInt(year) };
    onAddCar(newCar);
    setMake("");
    setModel("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Car</h2>
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
