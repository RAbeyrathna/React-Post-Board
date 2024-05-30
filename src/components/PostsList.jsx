import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostsList.module.css";


function PostsList({isCreatingPost, onFinishedPost}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    let modalContent;

    if (isCreatingPost){
        modalContent = (
        <Modal onClose={onFinishedPost}>
            <NewPost onCancel={onFinishedPost} onAddPost={addPostHandler}/>
        </Modal>
        );
    }

    return(
        <> 
            {modalContent}
            <ul className={classes.posts}>
                {posts.map(post => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>
        </>
    );
}


export default PostsList;