import React from "react";

import { ListView } from "./components/ListView.jsx";
import { GridView } from "./components/GridView.jsx";
import {users} from "../../data/users.js";

export const UsersDisplay = ({isListView}) =>{
   console.log("Users ", users);
    return (
       
<div className = "usersWrapper">
 {
     isListView
    ? <ListView users = {users} />
    : <GridView users = {users}/>
 }
</div>

    );//return



};