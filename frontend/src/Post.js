import './Post.css'

const Post = ({title, description, post}) => {
    return(
        <div id='post-div'>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>{post}</p>
        </div>
    )
}

export default Post;