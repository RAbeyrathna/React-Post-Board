import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostsList.module.css";


function PostsList({isCreatingPost, onFinishedPost}){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8080/posts');
            const responseData = await response.json();
            setPosts(responseData.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts at the moment</h2>
                    <p>Click "New Post" to add one now!</p>
                </div>
                )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map(post => <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
                )}
        </>
    );
}


export default PostsList;