import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList(){
    return(
        <ul className={classes.posts}>
            <Post author="Rahal" body="Hello world!"/>
            <Post author="Nala" body="Bark!"/>
        </ul>
    );
}


export default PostsList;