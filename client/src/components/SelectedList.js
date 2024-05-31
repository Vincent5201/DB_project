import { useState } from 'react';

function SelectedList() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  return (
    <div className="item-list">
      <h2>結果</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default SelectedList;


