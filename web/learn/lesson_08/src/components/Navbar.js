import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Error } from '../pages/Error';

export const Navbar = () => {
    return (
        <Router>
        <div>
          <p>NAVBAR</p>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<h1>Error Page</h1>} /> */}
        </Routes>
      </Router>
    )
}