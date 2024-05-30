import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [ modalIsVisible, setModalVisibility ] = useState(false);

  function hideModalHandler(){
    setModalVisibility(false);
  }

  function showModalHandler(){
    setModalVisibility(true);
  }
  return(
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isCreatingPost={modalIsVisible} onFinishedPost={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
