import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>blog app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/post">post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
