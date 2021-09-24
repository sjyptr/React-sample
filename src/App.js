
import React from 'react';

const handleColor = (x) => {
  let y = 'red';
  if (x > 0) {
    y = 'blue';
  } else if (x < 0) {
    y = 'orange';
  }
  return y;
};

function App() {
  // state variables, which can be changed in the course of the program.
  const [count, setCount] = React.useState(0);
  const [myColor, setMyColor] = React.useState('red');
  const handleClick = (e) => {
    let val = 0;
    if (e.target.classList.contains('subtract')) {
      val = count - 1;
    } else if (e.target.classList.contains('add')) {
      val = count + 1;
    }
    setCount(val);
    const color = handleColor(val);
    setMyColor(color);
  };
  return (
    <div className='container'>
      <div className='counter-div'>
        <h1>Counter Application</h1>
        <div
          className='count'
          style={{ color: myColor, fontSize: '24px', fontWeight: 'bold' }}
        >
          {count}
        </div>
        <hr />
        <div className='buttons' onClick={handleClick}>
          <button className='subtract'>Subtract</button>
          <button className='reset'>Reset</button>
          <button className='add'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;