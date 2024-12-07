import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="me@me.com"
        age={43}
        isMarried={true}
        friends={["Tom", "Jerry", "Fred"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
