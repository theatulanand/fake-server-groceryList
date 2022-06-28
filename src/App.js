import AddItem from './Components/Add-Item';
import DisplayItem from './Components/Display-item';
import './App.css';

function App() {
  return (
    <>
    <h1>Grocery List</h1>
    <div className="grocerylist">
      <div id="input">
        <AddItem/>
      </div>
      <div id="list">
        <DisplayItem/>
      </div>
    </div>
    </>
  );
}

export default App;
