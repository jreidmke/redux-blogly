import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToDB } from "./reducers/posts";
import PostForm from "./PostForm";

/** Show post form, and handle editing of it. */

function NewPost() {

  const dispatch = useDispatch();
  const history = useHistory();

  /** Adds post and saves to backend. */

  function add({ title, description, body }) {
    dispatch(sendPostToDB(title, description, body));
    history.push("/");
  }

  /** Cancel (redirect) */

  function cancel() {
    history.push("/");
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm edit={add} cancel={cancel} />
    </main>
  );
}

export default NewPost;
