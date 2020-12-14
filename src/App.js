import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Comment from './Comment';
import CommentForm from './CommentForm';
import {useState} from 'react';

function App() {
  const [comments, setComments] = useState([]);

  const createComment = (newComment) => setComments([...comments, newComment]);

  const commentsRender = comments.map(c => <Comment comment={c.comment}/>)

  return (
    <div className="App">
      <Header/>
      <CommentForm addComment={createComment}/>
      {commentsRender}
    </div>
  );
}

export default App;
