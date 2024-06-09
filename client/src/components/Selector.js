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
      <table>
        <tr>
            <td>盒子1</td>
            <td>盒子2</td>
            <td>盒子3</td>
        </tr>
    </table>
      <div className="item-list">
        <h2>結果</h2>
        <ul>
          {houses.map((house) => (
            <li key={house.H_ID}>
              <h2>{house.Title}</h2>
              <p>Price: {house.Price}</p>
              <ul>
                House_type:
                <li> 臥室：{house.HT_id[0]["Bedrooms"]}間</li>
                <li>面積：{house.HT_id[0]["Area"]}坪</li>
                <li>客廳：{house.HT_id[0]["Living_rooms"]}間</li>
                <li>
                  樓層{house.HT_id[0]["floor_all"]}之
                  {house.HT_id[0]["floor_destination"]}樓
                </li>
              </ul>

              <p></p>

              <ul>
                <li>地址：{house.L_id[0]["Address"]}</li>
              </ul>

              <ul>
                Equipment:
                <li> 沙發：{house.E_id[0]["Sofa"]}個</li>
                <li>冰箱：{house.E_id[0]["Refrigerator"]}坪</li>
                <li>電視：{house.E_id[0]["TV"]}台</li>
                <li>冷氣：{house.E_id[0]["AC"]}台</li>
                <li>網路：{house.E_id[0]["Internet"] === 1 ? "有" : "無"}</li>
                <li>陽台：{house.E_id[0]["Balcony"]}間</li>
                <li>電梯：{house.E_id[0]["Elevator"] === 1 ? "有" : "無"}</li>
                <li>停車場：{house.E_id[0]["Elevator"] === 1 ? "有" : "無"}</li>
              </ul>

              <p>評分: {house.Score}</p>
              <ul style={{ padding: "8px" }}>
                附近食物區:
                {house.arounds &&
                  house.arounds.restaurant.map((res, index) => (
                    <li key={index}>
                      {res.Title} - {res.Distance}km
                    </li>
                  ))}
              </ul>
              <ul style={{ padding: "8px" }}>
                附近影印店：
                <li>
                  {house.arounds.ty1.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近ubike：
                <li>
                  {house.arounds.ty3.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近便利商店：
                <li>
                  {house.arounds.ty4.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近公園：
                <li>
                  {house.arounds.ty5.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近ATM：
                <li>
                  {house.arounds.ty6.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近診所：
                <li>
                  {house.arounds.ty7.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              <ul style={{ padding: "8px" }}>
                附近理髮店：
                <li>
                  {house.arounds.ty8.map((res, index) => (
                    <li key={index}>
                      {res.Sname}：{res.Distance}km
                    </li>
                  ))}
                </li>
              </ul>
              {/* {console.log(house)} */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Selector;
