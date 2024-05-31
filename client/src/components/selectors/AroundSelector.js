import { useState } from "react";

function AroundSelector() {
  const [aroundChecked, setAroundChecked] = useState({
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    t5: false,
    t6: false,
    t7: false,
    t8: false,
  });
  const handleAroundChange = (event) => {
    const { name, checked } = event.target;
    setAroundChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const [selectedDistance, setSelectedDistance] = useState("3");

  const handleSelectChange = (event) => {
    setSelectedDistance(event.target.value);
  };

  return (
    <div className="filter-group">
      <h2>特色(租屋處附近一定要有什麼?)</h2>
      <label>
        距離限制:
        <select value={selectedDistance} onChange={handleSelectChange}>
          <option value="1">小於1km</option>
          <option value="3">小於3km</option>
          <option value="5">小於5km</option>
          <option value="10">小於10km</option>
        </select>
      </label>
      <div className="filter-options">
        <label>
          <input
            type="checkbox"
            name="t1"
            checked={aroundChecked.t1}
            onChange={handleAroundChange}
          />{" "}
          影印店
        </label>
        <label>
          <input
            type="checkbox"
            name="t2"
            checked={aroundChecked.t2}
            onChange={handleAroundChange}
          />{" "}
          垃圾車
        </label>
        <label>
          <input
            type="checkbox"
            name="t3"
            checked={aroundChecked.t3}
            onChange={handleAroundChange}
          />{" "}
          ubike
        </label>
        <label>
          <input
            type="checkbox"
            name="t4"
            checked={aroundChecked.t4}
            onChange={handleAroundChange}
          />{" "}
          便利商店
        </label>
        <label>
          <input
            type="checkbox"
            name="t5"
            checked={aroundChecked.t5}
            onChange={handleAroundChange}
          />{" "}
          公園
        </label>
        <label>
          <input
            type="checkbox"
            name="t6"
            checked={aroundChecked.t5}
            onChange={handleAroundChange}
          />{" "}
          ATM
        </label>
        <label>
          <input
            type="checkbox"
            name="t7"
            checked={aroundChecked.t5}
            onChange={handleAroundChange}
          />{" "}
          診所
        </label>
        <label>
          <input
            type="checkbox"
            name="t8"
            checked={aroundChecked.t5}
            onChange={handleAroundChange}
          />{" "}
          理髮店
        </label>
      </div>
    </div>
  );
}

export default AroundSelector;
