import React, { Fragment } from "react";//na prvom mestu su importi nekih biblioteka

import { Header } from "./Header/Header.jsx";// sledeći su naši importi
import { BlogList } from "./BlogList/BlogList.jsx";

import './App.css';//na kraju su css importi

// function App() {
//   return (
//     <Fragment>
//  <Header />
//   <BlogList />
//   </Fragment>
//   );
// }

class SmartApp extends React.Component {//svaka  class komponenta mora da nasledi components iz reacta
  constructor(props){//ovde ćemo raditi state
   super(props);// ovo treba da bi se nasledile componente iz react
   this.state = {
     name:"Dusan",
     counter: 0
   };
  }

  render(){//metoda koja dolazi kao deo React.Component i tu stavljamo sve ono što želimo da se prikaže na stranici
    console.log(this.state);

    return (
      <Fragment>
   <Header  name = {this.state.name} onUserSwitch = {() => this.setState({name:"Ivan"})}/>
   <span>{`Number of clicks: ${this.state.counter} `}</span>
   <button onClick = {() => this.setState({counter: this.state.counter +1})}>Click me!</button>
    <BlogList />
    </Fragment>
    );

  };//render
};//SmartApp
 //export default App;

export { SmartApp };
