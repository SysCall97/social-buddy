import React from 'react';
import { 
    CardHeader,
    CardContent, 
    Typography, 
    Avatar,
    makeStyles
} from '@material-ui/core';
import Images from '../../Images/Images';

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
    const img = Images[Math.floor(Math.random() * 15)];
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src={img} alt="" style={{width: "100%"}} />
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