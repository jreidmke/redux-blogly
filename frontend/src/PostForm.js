import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useHistory, useParams} from 'react-router-dom';
import './PostForm.css';
import data from './dummyPosts.json';
import { useSelector, useDispatch } from 'react-redux';

const PostForm = () => {
    const { id } = useParams();
    const post = useSelector(store => store.posts[id]);
    const titles = useSelector(store => store.titles);
    console.log(titles);

    const dispatch = useDispatch();

    const history = useHistory();

    const INITIAL_STATE = id ? {
        title: post.title,
        description: post.description,
        post: post.post
    } :
    {
        title: "",
        description: "",
        post: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

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
        // data.push({...formData, id: uuidv4(), comments: []});
        if(!id) {
            const newId = uuidv4();
            dispatch({type: 'ADD_POST', post: {...formData, id: newId, comments: []}});
            dispatch({type: "ADD_TITLE", post: {...formData, id: newId, comments: []}});
            data[newId] = {...formData, id: newId, comments: []};
        } else {
            dispatch({type: "EDIT_POST", post: {...formData, id: post.id, comments: []}});
            dispatch({type: "EDIT_TITLE", post: {...formData, id: post.id, comments: []}})

            data[post.id] =  {...formData, id: post.id, comments: []};
        }
        history.push("/");
        setFormData(INITIAL_STATE);
    };

    return(
        <form onSubmit={submit}>

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

        </form>
    )
}

export default PostForm;