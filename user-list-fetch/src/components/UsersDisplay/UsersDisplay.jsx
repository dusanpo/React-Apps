import React from "react";

import { ListView } from "./components/ListView.jsx";
import { GridView } from "./components/GridView.jsx";
//import {users} from "../../data/users.js";

export class UsersDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users:[]

        };

    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=15").then(res =>{
       return res.json();
    
        }).then(response =>{
            this.setState({
              users: response.results  
            });
        })
      

    }



    render(){
        if(this.state.users.length === 0){
            return <h1>Loading...</h1>
        }
        return (
       
            <div className = "usersWrapper">
             {
                 this.props.isListView
                ? <ListView users = {this.state.users} />
                : <GridView users = {this.state.users}/>
             }
            </div>
            
                );

    }
   
  



};