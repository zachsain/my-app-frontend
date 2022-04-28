import React from 'react'; 
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div className={'navBar'}>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Categories
        </NavLink>
        {/* <NavLink
          to="/paintings/new"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Add
        </NavLink> */}
      </div>
    );
  }
  
  export default NavBar