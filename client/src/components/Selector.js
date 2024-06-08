import React from "react";
import "../styles/style.css";
import SectionSelector from "./selectors/SectionSelector";
import RentalSelector from "./selectors/RentalSelector";
import FloorSelector from "./selectors/FloorSelector";
import ScoreSelector from "./selectors/ScoreSelector";
import EquipSelector from "./selectors/EquipSelector";
import AroundSelector from "./selectors/AroundSelector";
import LocationSelector from "./selectors/LocationSelector";
import { useState, useEffect } from "react";

const Selector = () => {
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
        query.append(category, value);
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

  return (
    <section>
      <div className="filter-container">
        <SectionSelector onFilterChange={handleFilterChange} />
        <RentalSelector onFilterChange={handleFilterChange} />
        <FloorSelector onFilterChange={handleFilterChange} />
        <ScoreSelector onFilterChange={handleFilterChange} />
        <EquipSelector onFilterChange={handleFilterChange} />
        <AroundSelector onFilterChange={handleFilterChange} />
        <LocationSelector onFilterChange={handleFilterChange} />
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
              <p>Location: {house.Location_id}</p>
              <p>Equipment: {house.Equipment_id}</p>
              <p>House_type: {house.Housetype_id}</p>
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Selector;
