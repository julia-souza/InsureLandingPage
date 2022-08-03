import React from 'react'
import "./css/Nav.css"

const Nav = () => {
  return (
    <div class="navbar">
        <div class="logo"></div>
        <div class="nav-items"> 
            <ul>
                <li> <a href='#'> Home </a> </li>
                <li> <a class="plano" href='#planosView'>Planos </a></li>
            </ul>
        </div>
    </div>
  );
}

export default Nav;