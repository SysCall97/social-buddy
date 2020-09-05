import React, { useState, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);


    return (
        <div className="below-header">
            {
                posts.map(post => <PostCard post={post} showButton={true} key={post.id}/>)
            }
        </div>
    );
};

export default Home;