
import '../App.css';
import { Link } from "react-router-dom"
function Navibar() {
  return (
    <div className="header">
    <div className="left">
      <Link style={{ textDecoration: 'none' }} className='headerTitle' to="/">Finance App</Link>
      <ul className="links">
        <li> <Link className='headerText' to="/howitworks">How it Works</Link></li>
        <li> <Link className='headerText' to="/AboutUs">About Us</Link></li>
      </ul>
    </div>
    <div className="right">
      <ul className="links">
        <li> <Link className='headerText' to="/LogIn">Log In</Link></li>
        <li> <Link className='headerText' to="/Register">Register</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Navibar;