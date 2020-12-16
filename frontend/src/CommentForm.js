import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './dummyPosts.json';
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = ({addComment, postId, id}) => {//we will be adding a comment to the comment state on our Post component
    const INITIAL_STATE = {
        text: ""
    };

    const post = useSelector(store => store.posts[postId]);

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
        // addComment({...formData, id: uuidv4()});
        // const selectedPost = data[postId];
        // console.log(postId);
        // selectedPost.comments.push({...formData, id: uuidv4()});
        // dispatch({ type: 'ADD_COMMENT', comment: {...formData, id: uuidv4()}, postId: postId});
        addComment(formData);
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor="text">Comment</label>
            <input
            onChange={handleChange}
            type='text'
            name='text'
            value={formData.text}
            />
            <button>Submit Comment</button>
        </form>
    )
}

export default CommentForm;