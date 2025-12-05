import { useState, useEffect } from "react";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year})
            <button onClick={() => onSelectCar(car)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
