import { useState } from 'react';

function FloorSelector() {
    const [floorChecked, setFloorChecked] = useState({
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        t5: false
    });
    const handleFloorChange = (event) => {
        const { name, checked } = event.target;
        setFloorChecked(prevState => ({
        ...prevState,
        [name]: checked
        }));
    };
  
    return (
        <div className="filter-group">
        <h2>樓層</h2>
        <div className="filter-options">
          <label>
            <input 
                type="checkbox"
                name="t1"
                checked={floorChecked.t1}
                onChange={handleFloorChange} /> 一樓
          </label>
          <label>
            <input 
                type="checkbox"
                name="t2"
                checked={floorChecked.t2}
                onChange={handleFloorChange} /> 二、三樓
          </label>
          <label>
            <input 
                type="checkbox"
                name="t3"
                checked={floorChecked.t3}
                onChange={handleFloorChange} /> 四~六樓
          </label>
          <label>
            <input 
                type="checkbox"
                name="t4"
                checked={floorChecked.t4}
                onChange={handleFloorChange} /> 六~九樓
          </label>
          <label>
            <input 
                type="checkbox"
                name="t5"
                checked={floorChecked.t5}
                onChange={handleFloorChange} /> 十樓以上
          </label>
        </div>
      </div>
    );
}
  
export default FloorSelector;