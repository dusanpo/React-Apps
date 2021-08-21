import React from "react";

import {users}  from "../data/users.js";
import "./Main.css";

export const Main = () => {


    const hideMail = (mail) => {
        let firstThree = "";
        let restOfMail = "";
         let indexOfAt;
        for(let i = 0; i < mail.length; i++) {
            if(i < 3){
                firstThree += mail[i];
            }
            if(mail[i] === "@"){
             indexOfAt = i;
            }
            if(indexOfAt) {
              restOfMail += mail[i];
            }
            }
       return firstThree + "..." + restOfMail; 
    }




    return(
        <div className = "container">
        {users[0].results.slice(0,10).map( (post,index) =>(
            <div className = "userInfo" key = {index}>

<div className = "row">
<div className = "col-1 text-end"><img src = {post.picture.medium} alt = "portrait"></img></div>

<div className = "col-11">
<ul>
    <li>
        name:{post.name.first}
    </li>
    <li>
        email: {hideMail(post.email)};
    </li>
    <li>
      date of birth: {post.dob.date}  
    </li>
</ul>
</div>
</div>

             </div>  
        ))}
       
     </div>
    );
};
