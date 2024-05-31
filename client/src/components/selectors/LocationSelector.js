import { useState } from 'react';

function LocationSelector() {
    const [inputLng, setInputLng] = useState('');
    const handleLngChange = (event) => {
        setInputLng(event.target.value);
    };
    const [inputLat, setInputLat] = useState('');
    const handleLatChange = (event) => {
        setInputLat(event.target.value);
    };
  
    return (
        <div className="input_locatoin">
            <label>
                輸入經度:
                <input 
                type="text" 
                value={inputLng} 
                onChange={handleLngChange} 
                />
            </label>
            <label>
                輸入緯度:
                <input 
                type="text" 
                value={inputLat} 
                onChange={handleLatChange} 
            />
            </label>
      </div>
    );
}
  
export default LocationSelector;