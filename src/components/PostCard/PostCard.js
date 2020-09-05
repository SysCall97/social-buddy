import React from 'react';
import { 
    Card, 
    CardHeader,
    CardContent, 
    Typography, 
    Avatar, 
    makeStyles, 
    Button, 
    Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: "2%"
    },
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

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                    "October", "November", "December"];


const PostCard = (props) => {

    function getRandomDate() {
        const year = Math.floor(Math.random() * (2020 - 2012 + 1)) + 2012;
        const date = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
        const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        return  `${months[month]} ${date}, ${year}`;
    }

    const classes = useStyles();
    const randDate = getRandomDate(Date('01/01/2013'), Date('01/06/2020'));
    const {post} = props;
    post.date = randDate;

    // const [userInfo, setUserInfo] = useState({});
    // const url = "https://randomuser.me/api/";
    // useEffect(() => {
    //     fetch(url, {mode: 'no-cors'})
    //     .then(response => response.json())
    //     .then(data => {
    //         const user = data.results;
    //         setUserInfo(user);
    //     });
    // }, []);

    // post.userName = `${userInfo.title} ${userInfo.first} ${userInfo.last}`;
    // post.userImg = userInfo.picture.thumbnail;

    
    const to = `/post/${post.id}`;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                
                title={post.title}
                subheader={post.date}
            />
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            { props.showButton && <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                <Link to={to} style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary"> See Comments </Button>
                </Link>
            </Box>}
        </Card>
    );
};

export default PostCard;