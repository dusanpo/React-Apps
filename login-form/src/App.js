import React, { Fragment } from "react";

import { Header } from "./components/Header.jsx";

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
      
    })
  }
 handlePassword = (event) =>{
   this.setState({
   password: event.target.value
   })
 }


  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.password}`);
   event.preventDefault();
  }
  
  handleReset = () =>{
    this.setState({
      username: "",
      password: ""
    })
  }



  render() {
    //console.log(this.state);
    const { username,password } = this.state;

    return (
      <Fragment>
        <Header />
        <div className = "div1">
        <div className = "container">
         <h3>Login</h3>
<form  onSubmit={this.handleSubmit}>
  <div>
    
      <input type="text" placeholder = "username"
       value={username}
       onChange={this.handleUsername}
    />
  </div>

  <div>
      <input type="password" placeholder = "password"
       value={password}
       onChange={this.handlePassword}
       />
  </div>

      <button className=  "submitButtton" type="submit">login</button><br/>
      <button className = "resetButtton" type = "reset" 
      onClick = {this.handleReset}>reset</button>
 </form>

</div>
</div>
      </Fragment>
    )

  }
}
export default App;
