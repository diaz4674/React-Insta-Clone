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
            changeHandler: this.props.changeHandler,
            timestamp: this.props.timestamp,
            comment: this.props.comment,
            addComentHandler: this.props.addComentHandler
        })
    }

    addComentHandler= e => {
        console.log(this.state.comments)
    }
    render(){
    return (
        <div className = 'commentsContainer'>
    { this.state.comments.map(recentComments => {
        return (
            <div>
                <div className = 'comments'> 
                    <h4>{recentComments.username}</h4>
                    <p> {recentComments.text}</p>
                </div>
        </div>
        )

}

)}               <p className = 'timestamp'> {this.state.timestamp} </p>
  <div className= 'commentAddSection'>
        <input input = 'text' placeholder = 'Add a comment...' className = "addComment" value ={this.state.comment} onChange ={this.state.changeHandler}/><button  className = 'commentBtn' onClick ={this.addComentHandler}>Post</button>
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