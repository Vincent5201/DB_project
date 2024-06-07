import React from "react";
import "../styles/style.css";
import SectionSelector from "./selectors/SectionSelector";
import RentalSelector from "./selectors/RentalSelector";
import FloorSelector from "./selectors/FloorSelector";
import ScoreSelector from "./selectors/ScoreSelector";
import EquipSelector from "./selectors/EquipSelector";
import AroundSelector from "./selectors/AroundSelector";
import LocationSelector from "./selectors/LocationSelector";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
// -----------------------------
// import CORS from "flask_cors";
// app = Flask(__name__);
// CORS(app);
// -------------------------------
const Selector = ({ properties, anotherprop }) => {
  const [filters, setFilters] = useState({
    location: [],
    rent: [],
    floor: [],
    rating: [],
    equipment: [],
  });
  const [houses, setHouses] = useState([]);

  const fetchHouses = () => {
    let query = new URLSearchParams();

    Object.keys(filters).forEach((category) => {
      filters[category].forEach((value) => {
        query.append(category.toLowerCase(), value);
      });
    });

    fetch(`/api/housesystem?${query.toString()}`)
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
  };

  const handleFilterChange = (category, name, checked) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (checked) {
        updatedFilters[category] = [...updatedFilters[category], name];
      } else {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== name
        );
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    fetchHouses();
  }, [filters]);

  console.log(houses);
  return (
    <section>
      <div className="filter-container">
        <SectionSelector onFilterChange={handleFilterChange} />
        <RentalSelector onFilterChange={handleFilterChange} />
        <FloorSelector onFilterChange={handleFilterChange} />
        <ScoreSelector onFilterChange={handleFilterChange} />
        <EquipSelector onFilterChange={handleFilterChange} />
        <button className="ui button" onClick={fetchHouses}>
          搜尋
        </button>
      </div>

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
    </section>
  );
};

export default Selector;

//{
/* 
// <div
//        classNameNameName=" classNameNamename not  classNameName!!!"
//       style={{ backgroundColor: "paleturquoise" }}
//     >
//       <h1>There are too many ways to express a function....</h1>

//       {friends.map((friend) => {
//         return <p>{friend}</p>;
//       })}
//       <h2>I'm a component from Donotlookatme component</h2>
      
    // </div> */
//}
