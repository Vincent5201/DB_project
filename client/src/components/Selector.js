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

const Selector = ({ properties, anotherprop }) => {

  return (
    <section>
      <div className="filter-container">
        <SectionSelector/>
        <RentalSelector/>
        <FloorSelector/>
        <ScoreSelector/>
        <EquipSelector/>
        <AroundSelector/>
        <LocationSelector/>
        <Button>搜尋</Button>
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
