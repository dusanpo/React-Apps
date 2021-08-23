import React, { Fragment } from 'react';

import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import './App.css';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usersID:[],
      usersData:[]
      
  }
  
  }

  componentDidMount(){
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(response =>{return response.json()})
    .then(data => this.setState({usersID: data.slice(0, 10)}))
   
}
 
getData = (id) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  .then(response => {return response.json()})
 
}

componentDidUpdate(prevProps,prevState){
  if(prevState.usersID.length !== this.state.usersID.length){
    const promiseList = this.state.usersID.map(id => this.getData(id));
    console.log(promiseList);
    Promise.all(promiseList).then(news => this.setState({usersData: news}));
  }
}
   
  render(){

    return(
          <Fragment>
            <Header />
            <Main usersData = {this.state.usersData}/>
          </Fragment>
        )

    }
  }
export default App;
