import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Elevators</Link>
          </li>
          <li>
            <Link to="/Errorreports">Error Reports</Link>
          </li>
            <li>
            <Link to="/Statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
  )
}
