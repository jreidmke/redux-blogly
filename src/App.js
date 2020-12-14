import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

//Components
import Header from './Header';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Post from './Post';
import PostForm from './PostForm';

function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  const createComment = (newComment) => setComments([...comments, newComment]);

  const addPost = (newPost) => setPosts([...posts, newPost]);

  const commentsRender = comments.map(c => <Comment comment={c.comment} key={c.id}/>)

  return (
    <div className="App">
      <Header/>
      <PostForm createPost={addPost}/>
    </div>
  );
}

export default App;
