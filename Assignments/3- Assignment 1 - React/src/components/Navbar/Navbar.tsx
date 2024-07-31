import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  function toggleMenu() {
    setVisible(!visible);
  }

  return (
    <div className="navB">
      <nav>
        <div className="container">
          <div className="logoA">
            <NavLink to={"/"}>Ali</NavLink>
          </div>
          <ul className={`navLinks ${visible ? "" : "menu"}`}>
            <li>
              <NavLink to={"About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"Portfolio"}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={"Contact"}>Contact</NavLink>
            </li>
          </ul>
          <button
            // className={`${!visible ? "" : "hidden"}`}
            onClick={toggleMenu}
          >
            🍔
          </button>
        </div>
      </nav>
    </div>
  );
}
