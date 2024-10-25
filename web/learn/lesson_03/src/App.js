import styles from './App.module.css';
import {User} from './User';
import {Planet} from './Planet';

function App() {
  const age = 17;
  const isGreen = true;
  const names = ["John","Frank","George","Simon"];
  const users = [
    {name: "John", age: 21},
    {name: "Frank", age: 31},
    {name: "George", age: 41},
    {name: "Simon", age: 51}
  ];
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]
  return (
    <div className={styles.App}>
      <h1 className={styles.name}> {age >= 18 ? "Over Age" : "Under Age"} </h1>
      <p style={{ color: isGreen ? "green" : "red"}}>This text is green</p>
      <p>{names[0]}</p>
      {names.map( (name,key) => {
        return <p>Hello, {name}</p>
      })}
      {users.map( (user,key) => {
        return (
          // <div>
          //   {user.name} is {user.age} years old.
          //   {user["name"]} is {user["age"]} years old
          // </div>
          <User name={user.name} age={user.age}/>
        )
      })}
      {planets.map( (planet,key) => {
        return (
          <Planet name={planet.name} isGasPlanet={planet.isGasPlanet} />
        )
      })}
      {planets.map( (planet,key) => planet.isGasPlanet && <p>{planet.name}</p> )}
    </div>
  );
}


export default App;
