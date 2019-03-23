import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';
import Poster from '../Styles/Reusables';
import styled from 'styled-components';

const CommentsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const Icons = styled.div `
    display: flex;
    justify-content: flex-start;
    margin: 5px 0px;
`

const Likes = styled.p `
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
`


const Comment = styled.span `
    padding: 0 0 0 7px;
`
const CommentsContain = styled.div `
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
    width: 100%;

`

const TimeStamp = styled.p `
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
`

const AddComment = styled.div `
    display: flex;
    justify-content: center;
    border-top: solid lightgray 1px;
    width: 97%;
`

const InputComment = styled.input `
    border: none;
    width: 100%;
    padding: 10px 10px; 
    font-size: 18px;

`

const ButtonPost = styled.button `
    background-color: white;
    color: lightblue;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 0;
    &:hover {
        color: blue;
    }

`

const Contain = styled.div `
    margin: 0 27px;
`

class CommentSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments:[],
            comment: '',
        };
    }

    componentDidMount(){ this.setState({
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
        this.setState({comments: this.state.comments.concat({username: localStorage.getItem('username'), text: `${this.state.comment}`}), comment: ''})
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
            return{likes: prevState.likes += 1,}
            }) : this.setState(prevState => { return {likes: prevState.likes -=1}})
        }
    }

    render(){
    return (
        <CommentsContainer>
            <Contain>
            <Icons> 
                <i className="far fa-heart" onClick ={this.likeHandler} ></i>
                <i className="far fa-comment"></i>
            </Icons>
            <Likes> {this.state.likes} likes </Likes>  

            { this.state.comments.map(recentComments => {
                return (
                    <CommentsContain>                  
                        <Poster notPoster>{recentComments.username}</Poster>
                        <Comment>  {recentComments.text}  </Comment>
                    </CommentsContain>
                )
                }
            )}               
            <TimeStamp> {this.state.timestamp} </TimeStamp>
            </Contain>
            <form onSubmit = {this.addComentHandler}> 
                <AddComment>
                    <InputComment input = 'text' placeholder = 'Add a comment...' className = "addComment" value ={this.state.comment} onChange ={this.changeHandler}/>
                    <ButtonPost  className = 'commentBtn' onClick ={this.addComentHandler}>Post</ButtonPost>
                </AddComment>
            </form>

        </CommentsContainer>
            )}
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