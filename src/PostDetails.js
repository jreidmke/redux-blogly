import './Post.css'
import {useState} from 'react';
import data from './dummyPosts.json';
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';

const PostDetails = ({post}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: post.title,
        description: post.description,
        post: post.post
    });
    const history = useHistory();

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(() => ({
            ...formData,
            [name]: value
        }));
    };

    const submit = e => {
        e.preventDefault();
        // createPost({...formData, id: uuidv4()});
        const tempId = uuidv4();
        data.push({...formData, id: tempId});
        history.push(`/${tempId}`);
        setIsEditing(false);
        // setFormData(INITIAL_STATE);
    };

    const removePost = (id) => {
        const postIdx = data.indexOf(data.find(p => p.id === id));
        data.splice(postIdx, 1);
        history.push('/');
    }

    const f = <div><form onSubmit={submit}>
    <label htmlFor="title">Post Title</label>
    <input
    onChange={handleChange}
    name="title"
    type="text"
    value={formData.title}
    id='title'
    />
    <br></br>
    <label htmlFor="description">Post Description</label>
    <input
    onChange={handleChange}
    name="description"
    type="text"
    value={formData.description}
    id="description"
    />
    <br></br>

    <label htmlFor="post">Post</label>
    <textarea
    onChange={handleChange}
    name="post"
    type="text"
    value={formData.post}
    id="post"
    rows={5}
    cols={40}
    />
    <br></br>

    <button>Submit</button>

    </form></div>

    const toggleIsEditing = () => setIsEditing(!isEditing);

    const removeComment = (id) => {
        const p = data.find(p => p.id === post.id);
        const commentIdx = p.comments.indexOf(p.comments.find(c => c.id === id));
        p.comments.splice(commentIdx, 1);
    }


    const details = <div id='post-div'>
        <h1>{post.title}</h1>
        <button onClick={toggleIsEditing}>Edit Post</button>
        <button onClick={() => removePost(post.id)}>Remove Post</button>
        <h4>{post.description}</h4>
        <p>{post.post}</p>
        <CommentForm postId={post.id}/>
        <ul>{post.comments.map(c => <Comment comment={c.comment} id={c.id} postId = {post.id} handleRemove={removeComment}/>)}</ul>
    </div>


    return(
        <div id='post-div'>
            {isEditing ? f : details}
        </div>

    )
}

export default PostDetails;
