import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Poster from '../Styles/Reusables'


const PostContain = styled.div `
    width: 594px;
    margin: 0 auto;
    border: solid .3px lightgray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
`

const PostHeader = styled.div `
    display: flex;
    justify-content: center;
    padding: 0 10px 10px 10px; 
`

const PostImg = styled.img `
    width: 100%;
`

const ThumbnailStyle = styled.img `
    height: 50px;
    width: 50px;
    border-radius: 80%;
    
`

const PostContainer = (props) => {

    const posts = props.data.filter((word) => {
        return word.username.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;}).map(post => {
        return (
            <PostContain>
                    <PostHeader> 
                        <ThumbnailStyle src = {post.thumbnailUrl} alt = 'user thumbnail' className = 'thumbnail'/>
                        <Poster poster> {post.username}</Poster>
                    </PostHeader>
                        <PostImg src={post.imageUrl} alt ="user post" />
                            <CommentSection comments = {post.comments} likes = {post.likes} comment = {post.comment} newComment = {post.newComment} changeHandler = {post.changeHandler} timestamp={post.timestamp} newComment= {post.newComment} addComentHandler ={post.addComentHandler}/>
            </PostContain>)
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