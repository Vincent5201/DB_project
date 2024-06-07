import { useState, useEffect } from "react";

function SelectedList() {
  // const [filters, setFilters] = useState({
  //   location: [],
  //   rent: [],
  //   floor: [],
  //   rating: [],
  //   equipment: [],
  // });
  // const [houses, setHouses] = useState([]);
  // const fetchHouses = () => {
  //   let query = new URLSearchParams();
  //   Object.keys(filters).forEach((category) => {
  //     filters[category].forEach((value) => {
  //       query.append(category.toLowerCase(), value);
  //     });
  //   });
  //   fetch(`/api/houses?${query.toString()}`)
  //     .then((response) => response.json())
  //     .then((data) => setHouses(data))
  //     .catch((error) => console.error("Error fetching houses:", error));
  // };
  // const handleFilterChange = (category, name, checked) => {
  //   setFilters((prevFilters) => {
  //     const updatedFilters = { ...prevFilters };
  //     if (checked) {
  //       updatedFilters[category] = [...updatedFilters[category], name];
  //     } else {
  //       updatedFilters[category] = updatedFilters[category].filter(
  //         (item) => item !== name
  //       );
  //     }
  //     return updatedFilters;
  //   });
  // };
  // useEffect(() => {
  //   fetchHouses();
  // }, [filters]);
  // return (
  //   <div className="item-list">
  //     <h2>結果</h2>
  //     <ul>
  //       {houses.map((house) => (
  //         <li key={house.H_ID}>
  //           <h2>{house.Title}</h2>
  //           <p>Price: {house.Price}</p>
  //           <p>Score: {house.Score}</p>
  //           <p>Location: {house.Location}</p>
  //           <p>Equipment: {house.Equipment}</p>
  //           {/* Add more fields as needed */}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
export default SelectedList;
