import './Post.css'

const Post = ({title, description, post, votes}) => {
    return(
        <div id='post-div'>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>{post}</p>
            <p>Votes: {votes}</p>
        </div>
    )
}

export default Post;