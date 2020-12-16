import './Post.css'
import {useState, useEffect} from 'react';
import data from './dummyPosts.json';
import {useHistory} from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getPostFromDB, editPostInDB, removePostFromDB, addCommentToDB, deleteCommentFromDB} from './reducers/posts';

const PostDetails = () => {
    const [isEditing, setIsEditing] = useState(false);

    const history = useHistory();

    const {id} = useParams();
    const post = useSelector(store => store.posts[id]);

    const dispatch = useDispatch();

    useEffect(() => {
        async function getPost() {
            await dispatch(getPostFromDB(id));
        }
        if(!post) {
            getPost();
        }
    }, [dispatch, post]);

    function removePost(e) {
        dispatch(removePostFromDB(post.id));
        history.push('/')
    }

    const toggleIsEditing = () => setIsEditing(!isEditing);

    function makeEdits({ title, description, body }) {
        dispatch(editPostInDB(
          post.id,
          title,
          description,
          body
        ));
        toggleIsEditing();
    }

    function createComment(text) {
        dispatch(addCommentToDB(post.id, text.text));
    }


    function removeComment(commentId) {
        dispatch(deleteCommentFromDB(post.id, commentId));
    }

    if(!post) return <p>LOADING RIGHT NOW</p>;

    const details = <div id='post-div'>
            <h1>{post.title}</h1>
            <button onClick={toggleIsEditing}>Edit Post</button>
            <button onClick={removePost}>Remove Post</button>
            <h4>{post.description}</h4>
            <p>{post.body}</p>
            <CommentForm addComment={createComment} postId={post.id}/>
            <ul>{post.comments.map(c => <Comment comment={c.text} id={c.id} postId = {post.id} handleRemove={removeComment}/>)}</ul>
        </div>;


    return(
        <div id='post-div'>
            {isEditing ? <PostForm save={makeEdits}/> : details}
        </div>

    )
}

export default PostDetails;


            {/* {isLoading ? "...Loading" : details} */}
    // const removePost = (id) => {
    //     delete data[id];
    //     // data.splice(postIdx, 1);
    //     history.push('/');
    // }

    // const removeComment = (id) => {
    //     // // const p = data.find(p => p.id === post.id);
    //     // const commentIdx = data[post.id].comments.indexOf(data[post.id].comments.find(c => c.id === id));
    //     // data[post.id].comments.splice(commentIdx, 1);
    //     dispatch({ type: "REMOVE_COMMENT", commentId: id, postId: post.id});
    //     history.push(`/${post.id}`)
    // }
    // const removePost = (id) => {
    //     dispatch({ type: "REMOVE_POST", post: {id: id}});
    //     dispatch({ type: 'REMOVE_TITLE', post: {id: id}});
    //     history.push('/');
    // }

    // function addPost({ title, description, body }) {
    //     dispatch(sendPostToDB(title, description, body));
    //     history.push('/');
    // }


    // const removeComment = (id) => {
    //     // // const p = data.find(p => p.id === post.id);
    //     // const commentIdx = data[post.id].comments.indexOf(data[post.id].comments.find(c => c.id === id));
    //     // data[post.id].comments.splice(commentIdx, 1);
    //     dispatch({ type: "REMOVE_COMMENT", commentId: id, postId: post.id});
    //     history.push(`/${post.id}`)
    // }