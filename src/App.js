import './App.css';
import ColorButton from './components/ColorButton';
import Foods from './components/Foods';

function App() {
  return (
    <div className="App">
      <h1>Button Component</h1>
      <Foods>
        <li>김밥</li>
        <li>만두</li>
        <li>순대</li>
      </Foods>
      <ColorButton color='red' text="구매하기" />
      <ColorButton color='green' text="장바구니" />
      <ColorButton color='yellow'>text content</ColorButton>
    </div>
  );
}

export default App;
