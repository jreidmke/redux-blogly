import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToDB } from "./reducers/posts";
import PostForm from "./PostForm";

/** Show post form, and handle editing of it. */

function NewPost() {

  const dispatch = useDispatch();

  function createPost({ title, description, body }) {
    dispatch(sendPostToDB(title, description, body));
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={createPost}/>
    </main>
  );
}

export default NewPost;
