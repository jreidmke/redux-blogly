import './Post.css'

const Post = ({title, description, post, handleEdit, handleRemove}) => {
    return(
        <div id='post-div'>
            <h1>{title}</h1>
            <button onClick={handleEdit}>Edit Post</button>
            <button onClick={handleRemove}>Remove Post</button>
            <h4>{description}</h4>
            <p>{post}</p>
        </div>
    )
}

export default Post;