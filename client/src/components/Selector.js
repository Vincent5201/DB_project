import React from "react";
import "../styles/style.css";
import SectionSelector from "./SectionSelector";
import RentalSelector from "./RentalSelector";
import FloorSelector from "./FloorSelector";
import ScoreSelector from "./ScoreSelector";
import EquipSelector from "./EquipSelector";

const Selector = ({ properties, anotherprop }) => {

  return (
    <section>
      <div className="filter-container">
        <SectionSelector/>
        <RentalSelector/>
        <FloorSelector/>
        <ScoreSelector/>
        <EquipSelector/>
        
        <div className="filter-group">
          <h2>特色(離您想要的店家最近的租屋處)</h2>
          <div className="filter-options">
            <label>
              選擇離店家種類:
              <select>
                <option value=""></option>
                <option value="ATM">銀行</option>
                <option value="resturant">餐廳</option>
                <option value="uBike">ubike</option>
                <option value="garbage-truck">垃圾車</option>
              </select>
            </label>
            <label>
              選擇離店家距離:
              <select>
                <option value=""></option>
                <option value="1">小於1km</option>
                <option value="3">小於3km</option>
                <option value="5">小於5km</option>
                <option value="10">小於10km</option>
              </select>
            </label>
            {/* I will modify this*/}
          </div>
        </div>
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
