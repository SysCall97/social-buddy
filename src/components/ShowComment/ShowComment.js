import React from 'react';
import { 
    CardHeader,
    CardContent, 
    Typography, 
    Avatar,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "blue",
    },
  }));

const ShowComment = (props) => {
    const classes = useStyles();
    const comment = props.comment;
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                
                title={comment.email}
            />
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {comment.body}
                </Typography>
            </CardContent>
        </>
    );
};

export default ShowComment;