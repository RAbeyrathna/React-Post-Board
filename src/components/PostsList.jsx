import { useState } from 'react';

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostsList.module.css";


function PostsList({isCreatingPost, onFinishedPost}){


    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    let modalContent;

    if (isCreatingPost){
        modalContent = (
        <Modal onClose={onFinishedPost}>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
        </Modal>
        );
    }



    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return(
        <> 
            {/* Ternary Modal Visibility */}
            {/* {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
                </Modal>
                ) : false}
             */}

            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Nala" body="Bark!"/>
            </ul>
        </>
    );
}


export default PostsList;