function CarDetail() {
  if (!car) {
    return <div>Select a car to see details</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} miles</p>
      <button>Contact Seller</button>
    </div>
  );
}

export default CarDetail;
