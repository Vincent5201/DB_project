// import { useState } from "react";

// function SectionSelector() {
//   const [sectionChecked, setSectionChecked] = useState({
//     north: false,
//     east: false,
//     central: false,
//   });
//   const handleSectionChange = (event) => {
//     const { name, checked } = event.target;

//     setSectionChecked((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   return (
//     <div className="filter-group">
//       <h2>位置</h2>
//       <div className="filter-options">
//         <label>
//           <input
//             type="checkbox"
//             name="north"
//             checked={sectionChecked.north}
//             onChange={handleSectionChange}
//           />{" "}
//           北區
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="east"
//             checked={sectionChecked.east}
//             onChange={handleSectionChange}
//           />{" "}
//           東區
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="central"
//             checked={sectionChecked.central}
//             onChange={handleSectionChange}
//           />{" "}
//           中西區
//         </label>
//       </div>
//     </div>
//   );
// }

// export default SectionSelector;
import React from "react";

const LocationFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange("location", name, checked);
  };

  return (
    <div className="filter-group">
      <h2>位置</h2>
      <div className="filter-options">
        <label>
          <input type="checkbox" name="北區" onChange={handleChange} /> 北區
        </label>
        <label>
          <input type="checkbox" name="東區" onChange={handleChange} /> 東區
        </label>
        <label>
          <input type="checkbox" name="中西區" onChange={handleChange} /> 中西區
        </label>
      </div>
    </div>
  );
};

export default LocationFilter;
