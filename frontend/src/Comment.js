const Comment = ({comment, handleRemove, id, postId}) => {
    return(
        <li><button onClick={() => handleRemove(id)}>X</button>{comment}</li>
    )
}

export default Comment;