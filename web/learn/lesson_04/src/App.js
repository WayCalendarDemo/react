import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    // age += 1; 
    // console.log(age);
    // setAge(5);
    setAge(age + 1);
  }
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; 
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const hanleTextColorChange = (event) => {
    setTextColor(textColor === "black" ? "red" : "black");
  }
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>{age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <div>
        <input type="text" onChange={handleInputChange}/>
        <p>{inputValue}</p>
      </div>
      <div>
        <button onClick={() => {setShowText(!showText)}}>Show/Hide Text</button>
         {showText === true && <p>I am visibile right now.</p>}
      </div>
      <div>
      <button onClick={() => {hanleTextColorChange()}}>Change text color</button>
        <p style={{color: textColor}}>This color is {textColor}</p>
      </div>
      <div>
        <button onClick={() => {setCount(count + 1)}}>Increase Number</button>
        <button onClick={() => {setCount(count - 1)}}>Decrease Number</button>
        <button onClick={() => {setCount(0)}}>Set Number to Zero</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
