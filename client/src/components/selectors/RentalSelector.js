import { useState } from 'react';

function RentalSelector() {
    const [rentalChecked, setRentalChecked] = useState({
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        t5: false
    });
    const handleRentalChange = (event) => {
        const { name, checked } = event.target;
        setRentalChecked(prevState => ({
        ...prevState,
        [name]: checked
        }));
    };
  
    return (
        <div className="filter-group">
        <h2>租金</h2>
        <div className="filter-options">
          <label>
            <input 
                type="checkbox"
                name="t1"
                checked={rentalChecked.t1}
                onChange={handleRentalChange} /> 5,000元以下
          </label>
          <label>
            <input 
                type="checkbox"
                name="t2"
                checked={rentalChecked.t2}
                onChange={handleRentalChange} /> 5,000-9,000元
          </label>
          <label>
            <input 
                type="checkbox"
                name="t3"
                checked={rentalChecked.t3}
                onChange={handleRentalChange} /> 9,000-14,000元
          </label>
          <label>
            <input 
                type="checkbox"
                name="t4"
                checked={rentalChecked.t4}
                onChange={handleRentalChange} /> 14,000-20,000元
          </label>
          <label>
            <input 
                type="checkbox"
                name="t5"
                checked={rentalChecked.t5}
                onChange={handleRentalChange} /> 大於20,000元
          </label>
        </div>
      </div>
    );
}
  
export default RentalSelector;