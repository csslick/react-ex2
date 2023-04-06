import './App.css';
import ColorButton from './components/ColorButton';

function App() {
  return (
    <div className="App">
      <h1>Button Component</h1>
      <ColorButton color='red' text="구매하기" />
      <ColorButton color='green' text="장바구니" />
    </div>
  );
}

export default App;
