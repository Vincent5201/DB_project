import { useState, useEffect } from "react";
import section from "./selectors/SectionSelector";
function SelectedList() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    score: "",
    equipment: "",
  });

  const fetchHouses = () => {
    let query = new URLSearchParams(filters).toString();
    fetch(`/api/houses?${query}`)
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
    console.log(query);
  };

  useEffect(() => {
    fetchHouses();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="item-list">
      <h2>結果</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.H_ID}>
            <h2>{house.Title}</h2>
            <p>Price: {house.Price}</p>
            <p>Score: {house.Score}</p>
            <p>Location: {house.Location}</p>
            <p>Equipment: {house.Equipment}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SelectedList;
