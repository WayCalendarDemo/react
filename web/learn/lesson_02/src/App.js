import './App.css';

function App() {
  const name = "Wayland";
  const header = <h1>Wayland</h1>
  return (
    <div className="App">
      {header}
      {name}
      <User name="Wayland" age={42} gender="Male" />
      <Job position="developer" company="Amazon" salary={1000} />
    </div>
  );
}

// A JS function
const getName = () => {
  return "Wayland";
};

// A React Component
const GetNameComponent = () => {
  return <h1>Wayland</h1>;
};

// A React Component
// The keyword 'props' is a prop (a JS object)
const User = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <p>{props.position}</p>
      <p>{props.company}</p>
      <p>{props.salary}</p>
    </div>
  );
}

export default App;
