import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage';
import dummyData from './dummy-data';
import WithAuthenticate from './components/authentication';
import LoginPage from "./components/Login/Login"



class App extends Component {
  constructor(){
    super();
    this.state = {
       dummyData,
      data: [],
      search: '',

    };
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

  searchHandler = (event) =>{

    this.setState({
      search: event.target.value
    })
  }
    


  render() {
    return (
      <div className="App">
      

           <div>
          <PostsPage  data = {this.state.data} searchHandler ={this.searchHandler} search ={this.state.search}/>
          
          </div>

      </div>
    );
  }
}

export default WithAuthenticate(App)(LoginPage);
