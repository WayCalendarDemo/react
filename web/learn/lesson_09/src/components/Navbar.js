import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
      <div>
      <p>NAVBAR</p>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
    )
}