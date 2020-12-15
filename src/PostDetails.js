import './Post.css'
import {useState} from 'react';
import data from './dummyPosts.json';
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const PostDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();

    const {id} = useParams();
    const post = useSelector(store => store.posts[id]);
    const dispatch = useDispatch();

    // const removePost = (id) => {
    //     delete data[id];
    //     // data.splice(postIdx, 1);
    //     history.push('/');
    // }

    const removePost = (id) => {
        dispatch({ type: "REMOVE_POST", post: {id: id}});
        history.push('/');
    }

    const toggleIsEditing = () => setIsEditing(!isEditing);

    const removeComment = (id) => {
        // // const p = data.find(p => p.id === post.id);
        // const commentIdx = data[post.id].comments.indexOf(data[post.id].comments.find(c => c.id === id));
        // data[post.id].comments.splice(commentIdx, 1);
        dispatch({ type: "REMOVE_COMMENT", commentId: id, postId: post.id});
        history.push(`/${post.id}`)
    }


    const details = <div id='post-div'>
        <h1>{post.title}</h1>
        <button onClick={toggleIsEditing}>Edit Post</button>
        <button onClick={() => removePost(post.id)}>Remove Post</button>
        <h4>{post.description}</h4>
        <p>{post.post}</p>
        {console.log(post.comments)}
        <CommentForm postId={post.id}/>
        <ul>{post.comments.map(c => <Comment comment={c.comment} id={c.id} postId = {post.id} handleRemove={removeComment}/>)}</ul>
    </div>


    return(
        <div id='post-div'>
            {isEditing ? <PostForm post={post}/> : details}
        </div>

    )
}

export default PostDetails;

    // const [formData, setFormData] = useState({
    //     title: post.title,
    //     description: post.description,
    //     post: post.post
    // });


    // const handleChange = e => {
    //     const {name, value} = e.target;
    //     setFormData(() => ({
    //         ...formData,
    //         [name]: value
    //     }));
    // };

    // const submit = e => {
    //     e.preventDefault();
    //     // createPost({...formData, id: uuidv4()});
    //     // const postIdx = data.indexOf(data.find(p => p.id === post.id));
    //     // data.splice(postIdx, 1);
    //     // const tempId = uuidv4();
    //     // data.push({...formData, id: tempId, comments: []});
    //     data[post.id] = {...formData, id: post.id, comments: []};
    //     history.push(`/${post.id}`);
    //     setIsEditing(false);
    //     // setFormData(INITIAL_STATE);
    // };

    // const f = <div><form onSubmit={submit}>
    // <label htmlFor="title">Post Title</label>
    // <input
    // onChange={handleChange}
    // name="title"
    // type="text"
    // value={formData.title}
    // id='title'
    // />
    // <br></br>
    // <label htmlFor="description">Post Description</label>
    // <input
    // onChange={handleChange}
    // name="description"
    // type="text"
    // value={formData.description}
    // id="description"
    // />
    // <br></br>

    // <label htmlFor="post">Post</label>
    // <textarea
    // onChange={handleChange}
    // name="post"
    // type="text"
    // value={formData.post}
    // id="post"
    // rows={5}
    // cols={40}
    // />
    // <br></br>

    // <button>Submit</button>

    // </form></div>