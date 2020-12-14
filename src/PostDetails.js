import './Post.css'
import {Link} from 'react-router-dom';

const PostDetails = ({post}) => {
    return(
        <div id='post-div'>
            <h1>{post.title}</h1>
            <button>Edit Post</button>
            <button>Remove Post</button>
            <h4>{post.description}</h4>
            <p>{post.post}</p>
        </div>
    )
}

export default PostDetails;

// onClick={handleEdit}
// onClick={handleRemove}