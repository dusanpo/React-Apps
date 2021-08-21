import React, { Fragment } from "react";

import { Header } from "./components/Header/Header.jsx";
import {UsersDisplay} from "./components/UsersDisplay/UsersDisplay.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import './App.css';


class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
   isListView: true
  };
 // this.onLayoutToggle = this.onLayoutToggle.bind(this); ovo koristimo kada nije arrow funkcija
}


  onLayoutToggle = () => {
  this.setState({
  isListView: !this.state.isListView
  })
  
}

render(){
  return (
    <Fragment>
    <Header isListView = {this.state.isListView} onLayoutToggle = {this.onLayoutToggle}/>
    <UsersDisplay isListView = {this.state.isListView}/>
    <Footer/>
    
    </Fragment>
      ); 
}
}
export default App;
