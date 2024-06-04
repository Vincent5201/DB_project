import { useState, useEffect } from "react";

function SelectedList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("/api/houses")
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
  }, []);

  return (
    <div className="item-list">
      <h2>結果</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <h2>{house.title}</h2>
            <p>Price: {house.price}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SelectedList;
