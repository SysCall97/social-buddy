import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';
import Comments from '../Comments/Comments';

const ShowPost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data));
    }, [url]);

    return (
        <div className="below-header">
            <PostCard post={post} showButton={false} key={1} />
            <h2 style={{borderBottom:"1px solid lightgray", width: "25vh"}}>Comments</h2>
            <Comments postId={postId} key={2} />
        </div>
    );
};

export default ShowPost;