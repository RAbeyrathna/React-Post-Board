import { useState } from 'react';

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from './Modal';
import classes from "./PostsList.module.css";


function PostsList(){
    const [ modalIsVisible, setModalVisibility ] = useState(true);

    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function hideModalHandler(){
        setModalVisibility(false);
    }

    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return(
        <>
            {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
                </Modal>
                ) : false}
            
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Nala" body="Bark!"/>
            </ul>
        </>
    );
}


export default PostsList;