import React from "react";

import "./Main.css";

export const Main = ({usersData}) =>{
  return (
 <ol className="collection" >
    {usersData.map((post, index) =>(
      <li className="collection-item" id = "container" key = {index}>
        <span className="title"> {post.title}</span> <span className = "secondTitle"><span className = "brackets">(</span>{post.url}<span className = "brackets">)</span></span>
        <p>
        <span className = "score"><i className="tiny material-icons">favorite</i> {post.score} points</span>&nbsp;&nbsp;
         <span className = "score"> <i className="tiny material-icons">person</i></span><span className = "title">{post.by} </span>&nbsp;&nbsp;
         <span className = "score"><i className="tiny material-icons">schedule</i></span><span className = "title">{post.time}</span>&nbsp;&nbsp;
         <span className = "comments">{post.descendants} comments</span>
        </p>
      </li> 
    )
    )}    
  </ol>
  );



}

