import React from 'react'
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';




const PostsPage = (props) => {
        return (
            <div>
                <SearchBar searchHandler ={props.searchHandler} search ={props.search} />
                <PostContainer data = {props.data} search ={props.search}/>
            </div>
        );
    }


export default PostsPage;