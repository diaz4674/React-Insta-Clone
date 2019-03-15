import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';


class CommentSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments:[],
        };
    }

    componentDidMount(){

        this.setState({
            comments: this.props.comments,
            changeHandler: this.props.changeHandler
        })
    }
    render(){
    return (
        <div className = 'commentsContainer'>
                    <div className = 'comments'> 
                        <h4>{comments.username}</h4>
                        <p> {comments.text}</p>
                    </div>
            }
            <p className = 'timestamp'> {props.timestamp}</p>
            <div className= 'commentAddSection'>
            <input input = 'text' placeholder = 'Add a comment...' className = "addComment" value ={props.comment} onChange ={props.changeHandler}/><button  className = 'commentBtn' onClick ={props.addComentHandler}>Post</button>
            </div>
        </div>
    
    )
    }
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