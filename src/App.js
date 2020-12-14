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

  const createComment = (newComment) => setComments([...comments, newComment]);

  const commentsRender = comments.map(c => <Comment comment={c.comment} key={c.id}/>)

  return (
    <div className="App">
      <Header/>
      <CommentForm addComment={createComment}/>
      <Post title='Pizza' description='Pizza is so good!' post='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      {commentsRender}
    </div>
  );
}

export default App;
