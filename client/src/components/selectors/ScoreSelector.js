import { useState } from 'react';

function ScoreSelector() {
    const [scoreChecked, setScoreChecked] = useState({
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        t5: false
    });
    const handleScoreChange = (event) => {
        const { name, checked } = event.target;
        setScoreChecked(prevState => ({
        ...prevState,
        [name]: checked
        }));
    };
  
    return (
        <div className="filter-group">
        <h2>評價</h2>
        <div className="filter-options">
          <label>
            <input 
                type="checkbox"
                name="t1"
                checked={scoreChecked.t1}
                onChange={handleScoreChange} /> 0~1
          </label>
          <label>
            <input 
                type="checkbox"
                name="t2"
                checked={scoreChecked.t2}
                onChange={handleScoreChange} /> 1~2
          </label>
          <label>
            <input 
                type="checkbox"
                name="t3"
                checked={scoreChecked.t3}
                onChange={handleScoreChange} /> 2~3
          </label>
          <label>
            <input 
                type="checkbox"
                name="t4"
                checked={scoreChecked.t4}
                onChange={handleScoreChange} /> 3~4
          </label>
          <label>
            <input 
                type="checkbox"
                name="t5"
                checked={scoreChecked.t5}
                onChange={handleScoreChange} /> 4~5
          </label>
        </div>
      </div>
    );
}
  
export default ScoreSelector;