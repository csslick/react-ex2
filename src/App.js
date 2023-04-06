import './App.css';
import ColorButton from './components/ColorButton';
import Foods from './components/Foods';
import { useState } from 'react';

function App() {
  // let count = 0; // 카운트 변수
  // 상태변수(화면에 업데이트 되는 변수에 사용하는 것임)
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }
  console.log(count);

  return (
    <div className="App">
      <p>count: { count }</p>
      <button onClick={addCount}>count++</button>
    </div>
  );
}

export default App;
