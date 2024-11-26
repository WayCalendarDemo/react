import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import {useState, createContext} from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Wayland");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="*" element={<h1>Error Page</h1>} /> */}
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
