
import '../App.css';
function Navibar() {
  return (
    <div className="header">
    <div className="left">
      <a className='headerTitle' href="google.com">Finance App</a>
      <ul className="links">
        <li><a href="google.com">How it Works</a></li>
        <li><a href="google.com">About Us</a></li>
      </ul>
    </div>
    <div className="right">
    <ul className="links">
        <li><a href="google.com">Log In</a></li>
        <li><a href="google.com">Register</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navibar;