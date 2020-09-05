import React, { useState, useEffect } from 'react';
import ShowComment from '../ShowComment/ShowComment';
import { 
    Card,
    makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: "2%"
    }
  }));

const Comments = (props) => {
    const classes = useStyles();
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`;
    const [comments, setComments] = useState([]);
    

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data));

    }, [url]);

    return (
        <div>
            <Card className={classes.root}>
            {
                comments.map(comment => <ShowComment comment={comment} key={`${props.postId}${comment.id}`} />)
            }
            </Card>
        </div>
    );
};

export default Comments;