import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';


// fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";





const PostContainer = (props) => {

    const posts = props.data.filter((word) => {
        return word.username.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;}).map(post => {
        return (
            <div className = 'postContainer'>
                    <div className = 'postHeader'> 
                        <img src = {post.thumbnailUrl} alt = 'user thumbnail' className = 'thumbnail'/>
                        <h4 className ='poster'> {post.username}</h4>
                    </div>
                        <img src={post.imageUrl} alt ="user post" />
                            <CommentSection comments = {post.comments} likes = {post.likes} comment = {post.comment} newComment = {post.newComment} changeHandler = {post.changeHandler} timestamp={post.timestamp} newComment= {post.newComment} addComentHandler ={post.addComentHandler}/>
            </div>)
    })

    return (
        <div>
            {posts}
        </div>
    )
    

}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        })
    )
}

export default PostContainer;