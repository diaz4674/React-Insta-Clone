import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return (
        <div className = 'commentsContainer'>
            {props.comments.map(comment => {
                return (
                    <div className = 'comments'> 
                        <h4>{comment.username}</h4>
                        <p> {comment.text}</p>
                      
                    </div>
                   
                )
            })}
            <p className = 'timestamp'> {props.timestamp}</p>
            <input input = 'text' placeholder = 'Add a comment...' className = "addComment"/>
        </div>
       
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default CommentSection;