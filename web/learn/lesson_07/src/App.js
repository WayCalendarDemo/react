import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("");
  const updateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact)
    })
  }

  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

  const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  const [age, setAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data)
      // setAge(res.data.age);
      setAge(res.data);
      console.log(age)
    })
  }

  const [excuse, setExcuse] = useState("");
  const getExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then((res) => {
      console.log(res.data[0].excuse);
      setExcuse(res.data[0].excuse);
    })
  }

  return (
    <div className="App">
      <div>
        <button onClick={updateCatFact}>Generate cat fact</button>
        <p>{catFact}</p>
      </div>
      <div>
        <input placeholder='Enter name' onChange={(event) => {setName(event.target.value)}}/>
        <button onClick={fetchData}>predict age</button>
        {/* <p>Predicted Age: {age}</p> */}
        <p>Name: {age?.name}</p>
        <p>Age: {age?.age}</p>
      </div>
      <div>
        <p>Generate an excuse</p>
        <button onClick={() => {getExcuse("party")}}>Party</button>
        <button onClick={() => {getExcuse("family")}}>Family</button>
        <button onClick={() => {getExcuse("office")}}>Office</button>
        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;
