import React from "react";

import "./styles/style.css";
const Donotlookatme = (properties) => {
  console.log(properties.properties, "sss");
  console.log(properties.anotherprop, "8787");

  let friends = ["You", "Me", "She", "Him"];
  return (
    <div
      className="classname not class!!!"
      style={{ backgroundColor: "paleturquoise" }}
    >
      <h1>There are too many ways to express a function....</h1>

      {friends.map((friend) => {
        return <p>{friend}</p>;
      })}
      <h2>I'm a component from Donotlookatme component</h2>
    </div>
  );
};

export default Donotlookatme;
