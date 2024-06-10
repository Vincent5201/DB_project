import { useState } from "react";

const AroundSelector = ({ onFilterChange }) => {

    const handleChange = (e) => {
        const { name, checked } = e.target;
        onFilterChange("around", name, checked);
    };
  return (
    <div className="filter-group">
      <h2>生活機能(租屋處附近一定有什麼?)</h2>
      <div className="filter-options">
        <label>
        <input type="checkbox" name="t0" onChange={handleChange} /> 餐廳
        </label>
        <label>
        <input type="checkbox" name="t1" onChange={handleChange} /> 影印店
        </label>
        <label>
        <input type="checkbox" name="t3" onChange={handleChange} /> Ubike
        </label>
        <label>
        <input type="checkbox" name="t4" onChange={handleChange} /> 便利商店
        </label>
        <label>
        <input type="checkbox" name="t5" onChange={handleChange} /> 公園
        </label>
        <label>
        <input type="checkbox" name="t6" onChange={handleChange} /> ATM
        </label>
        <label>
        <input type="checkbox" name="t7" onChange={handleChange} /> 診所
        </label>
        <label>
        <input type="checkbox" name="t8" onChange={handleChange} /> 理髮店
        </label>
      </div>
    </div>
  );
}

export default AroundSelector;
