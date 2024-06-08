// import { useState } from "react";

// function EquipSelector() {
//   const [equipChecked, setEquipChecked] = useState({
//     t1: false,
//     t2: false,
//     t3: false,
//     t4: false,
//     t5: false,
//     t6: false,
//     t7: false,
//     t8: false,
//     t9: false,
//     t10: false,
//     t11: false,
//   });
//   const [setNum, changeNum] = useState(1);

//   const clickHandler = () => {
//     changeNum(setNum + 1);
//   };
//   const handleEquipChange = (event) => {
//     const { name, checked } = event.target;
//     setEquipChecked((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };
//   var test = <h1>hello world</h1>;
//   let wtf = () => {
//     return test;
//   };

//   return (
//     <div className="filter-group">
//       <h2>樓層</h2>
//       <div className="filter-options">
//         <label>
//           <input
//             type="checkbox"
//             name="t1"
//             checked={equipChecked.t1}
//             onChange={handleEquipChange}
//           />{" "}
//           冷氣
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t2"
//             checked={equipChecked.t2}
//             onChange={handleEquipChange}
//           />{" "}
//           電視
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t3"
//             checked={equipChecked.t3}
//             onChange={handleEquipChange}
//           />{" "}
//           冰箱
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t4"
//             checked={equipChecked.t4}
//             onChange={handleEquipChange}
//           />{" "}
//           洗衣機
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t5"
//             checked={equipChecked.t5}
//             onChange={handleEquipChange}
//           />{" "}
//           熱水器
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t6"
//             checked={equipChecked.t6}
//             onChange={handleEquipChange}
//           />{" "}
//           廚房
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t7"
//             checked={equipChecked.t7}
//             onChange={handleEquipChange}
//           />{" "}
//           網路
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t8"
//             checked={equipChecked.t8}
//             onChange={handleEquipChange}
//           />{" "}
//           沙發
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t9"
//             checked={equipChecked.t9}
//             onChange={handleEquipChange}
//           />{" "}
//           衣櫃
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t10"
//             checked={equipChecked.t10}
//             onChange={handleEquipChange}
//           />{" "}
//           電梯
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="t11"
//             checked={equipChecked.t11}
//             onChange={handleEquipChange}
//           />{" "}
//           停車位
//         </label>
//       </div>
//       <h1 style={{ color: "black", fontSize: "100px" }}>{setNum}</h1>
//       <button onClick={clickHandler}> click me to add 1</button>
//     </div>
//   );
// }

// export default EquipSelector;

import React from "react";

const EquipSelector = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange("equipment", name, checked);
  };

  return (
    <div className="filter-group">
      <h2>設備</h2>
      <div className="filter-options">
        <label>
          <input type="checkbox" name="冷氣" onChange={handleChange} /> 冷氣
        </label>
        <label>
          <input type="checkbox" name="電視" onChange={handleChange} /> 電視
        </label>
        <label>
          <input type="checkbox" name="冰箱" onChange={handleChange} /> 冰箱
        </label>
        <label>
          <input type="checkbox" name="洗衣機" onChange={handleChange} /> 洗衣機
        </label>
        <label>
          <input type="checkbox" name="熱水器" onChange={handleChange} /> 熱水器
        </label>
        <label>
          <input type="checkbox" name="廚房" onChange={handleChange} /> 廚房
        </label>
        <label>
          <input type="checkbox" name="網路" onChange={handleChange} /> 網路
        </label>
        <label>
          <input type="checkbox" name="沙發" onChange={handleChange} /> 沙發
        </label>
        <label>
          <input type="checkbox" name="衣櫃" onChange={handleChange} /> 衣櫃
        </label>
        <label>
          <input type="checkbox" name="電梯" onChange={handleChange} /> 電梯
        </label>
        <label>
          <input type="checkbox" name="停車位" onChange={handleChange} /> 停車位
        </label>
      </div>
    </div>
  );
};

export default EquipSelector;
