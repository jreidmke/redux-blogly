import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const PostForm = ({createPost}) => {
    const INITIAL_STATE = {
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
        createPost({...formData, id: uuidv4()});
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

            <label htmlFor="description">Post Description</label>
            <input
            onChange={handleChange}
            name="description"
            type="text"
            value={formData.description}
            id="description"
            />

            <label htmlFor="post">Post</label>
            <input
            onChange={handleChange}
            name="post"
            type="text-area"
            value={formData.post}
            id="post"
            />

            <button>Submit</button>

        </form>
    )
}

export default PostForm; 