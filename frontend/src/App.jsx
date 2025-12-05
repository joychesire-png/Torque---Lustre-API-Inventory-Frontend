import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarList from "./CarList.jsx";
import CarForm from "./CarForm.jsx";
import Header from "./Header.jsx";
import CarDetail from "./CarDetail.jsx";

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleAddCar = (newCar) => {
    // Logic to add the new car to the inventory
    console.log("New car added:", newCar);
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <header />
      <CarForm onAddCar={handleAddCar} />
      <CarList onSelectCar={handleSelectCar} />
      {selectedCar && <CarDetail car={selectedCar} />}
      <CarDetail car={selectedCar} />
      <h1>Torque & Lustre Inventory</h1>
    </div>
  );
}

export default App;
