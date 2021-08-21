import React from "react";

import "./Header.css";

export const Header = ({onLayoutToggle, isListView}) =>{
  const text = isListView ? "Grid Layout" : "List Layout";
  return(

    <nav>
    <div className="nav-wrapper">
      <h5 className="brand-logo center">React Users</h5>
      <ul className="right hide-on-med-and-down">
          <li>
      <p onClick = {onLayoutToggle} className="waves-effect waves-light btn" id = "button">{text}</p>
      </li>
      </ul>
     
    </div>
  </nav>


  );
};
