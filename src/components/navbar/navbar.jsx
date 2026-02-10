import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
     <div id="logo">
      <h2>Routing</h2></div>
      <div id="nav_Links">
      <span><Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link></span>
      <span><Link style={{textDecoration: 'none', color: 'black'}} to="/about">About</Link></span>
      <span><Link style={{textDecoration: 'none', color: 'black'}} to="/Recipe">Recipes</Link></span>
      <span><Link style={{textDecoration: 'none', color: 'black'}} to="/Product">Product</Link></span>
      <span><Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link></span>
      </div>
    </nav>
  );
}

export default Navbar;
