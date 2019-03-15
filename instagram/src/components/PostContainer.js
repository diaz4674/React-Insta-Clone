import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';


// fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";



const PostContainer = (props) => {
    return (
        <div className = 'postContainer'>
                <div className = 'postHeader'> 
                    <img src = {props.thumbnail} alt = 'user thumbnail' className = 'thumbnail'/>
                    <h4 className ='poster'> {props.username}</h4>
                </div>
                    <img src={props.img} alt ="user post" />
                    <div className = 'icons'> 
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                    </div>
                        <p className ='likes'> {props.likes} likes </p>
                        <CommentSection comments = {props.comments} comment = {props.comment} newComment = {props.newComment} changeHandler = {props.changeHandler} timestamp={props.timestamp} newComment= {props.newComment} addComentHandler ={props.addComentHandler}/>
        </div>)
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