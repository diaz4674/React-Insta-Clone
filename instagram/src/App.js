import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
       { this.state.dummyData.map(post => {
         return(
           <div>
            <PostContainer timestamp = {post.timestamp} thumbnail = {post.thumbnailUrl} username = {post.username} img = {post.imageUrl} likes = {post.likes} comments = {post.comments}/>
          </div>
         )
       })}
      </div>
    );
  }
}



export default App;
