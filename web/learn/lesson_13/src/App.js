import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        name="Wayland"
        email="me@me.com"
        age={43}
        isMarried={true}
        friends={["me", "myself", "and I"]}
      />
    </div>
  );
}

export default App;
