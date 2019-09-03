import React from 'react';
import './App.css';
import axios from "axios"; 
import UsersCard from './components/UsersCard.js';

 class App extends React.Component {
 constructor() {
   super(); 
   this.state = {
     users: [], 
     followers: []
   }
 }

componentDidMount() {
  this.Users()
}

Users = () => {
  axios
  .get("https://api.github.com/users/noahfranco")
  .then(res => {
    console.log(res)
    this.setState({users: res.data})
  })
  .catch(error => {
    console.log("ERROR", error)
  })
}

Followers = () => {
  
} 

  render() {
    return (
      <div className="App">
        <h2> Github Accounts </h2>
        <UsersCard data={this.state.users}/> 
      </div>
    );
  }
}
  

export default App;
