import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList(){
    return(
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Rahal" body="Hello world!"/>
                <Post author="Nala" body="Bark!"/>
            </ul>
        </>
    );
}


export default PostsList;