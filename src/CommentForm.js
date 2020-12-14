import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './dummyPosts.json';

const CommentForm = ({addComment, postId, id}) => {//we will be adding a comment to the comment state on our Post component
    const INITIAL_STATE = {
        comment: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(() => ({
            ...formData,
            [name]: value
        }));
        console.log(formData);
    };

    const submit = e => {
        e.preventDefault();
        // addComment({...formData, id: uuidv4()});
        const selectedPost = data.find(
            p=> p.id === postId
        );
        selectedPost.comments.push({...formData, id: uuidv4()});
        console.log(selectedPost.comments);
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor="comment">Comment</label>
            <input
            onChange={handleChange}
            type='text'
            name='comment'
            value={formData.comment}
            />
            <button>Submit Comment</button>
        </form>
    )
}

export default CommentForm;