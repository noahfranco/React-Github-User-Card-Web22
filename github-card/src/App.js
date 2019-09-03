import React from 'react';
import './App.css';
import axios from "axios"; 
import UsersCard from './components/UsersCard.js';
import FollowersCard from "./components/FollowersCard.js"; 

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
  this.Followers()
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
  axios
  .get("https://api.github.com/users/noahfranco/followers")
  .then(res => {
     console.log(res)

  })
  .catch(error => {
    console.log("ERROR", error)
  })
} 

  render() {
    return (
      <div className="App">
        <h2> Github Accounts </h2>
        <UsersCard data={this.state.users}/> 
        {this.state.followers.map(display => (
          <FollowersCard display={display} key={display.id} /> 
        ))}
      </div>
    );
  }
}
  

export default App;
