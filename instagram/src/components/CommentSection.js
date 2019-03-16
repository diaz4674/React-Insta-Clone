import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';


class CommentSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments:[],
            comment: '',
        };
    }

    componentDidMount(){

        this.setState({
            comments: this.props.comments,
            changeHandler: this.props.changeHandler,
            timestamp: this.props.timestamp,
            likes: this.props.likes,
            clicks: 0,
            show: true
        })
    }
    

    changeHandler = e => {
        this.setState({comment: e.target.value }, )
    
      }

    addComentHandler= e => {
        this.setState({comments: this.state.comments.concat({username: 'Ricky Bobby', text: `${this.state.comment}`}), comment: ''})
        e.preventDefault()
    }



    likeHandler = () => {
        
    this.setState(prevState => {
        return{
            show: !prevState.show,

        }
    })

    {
        this.state.show ? this.setState( prevState => {
            return{
            likes: prevState.likes += 1,}
        }) : this.setState(prevState => { return {likes: prevState.likes -=1}})
    
    }
    }

    render(){
    return (
        <div className = 'commentsContainer'>
                     <div className = 'icons'> 
                        <i className="far fa-heart" onClick ={this.likeHandler} ></i>
                        <i className="far fa-comment"></i>
                    </div>
                        <p className ='likes'> {this.state.likes} likes </p>       
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

        <form onSubmit = {this.addComentHandler}> 
            <div className= 'commentAddSection'>
                <input input = 'text' placeholder = 'Add a comment...' className = "addComment" value ={this.state.comment} onChange ={this.changeHandler}/><button  className = 'commentBtn' onClick ={this.addComentHandler}>Post</button>
            </div>
        </form>

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