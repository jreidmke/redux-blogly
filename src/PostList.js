import {useState} from 'react';
import {Link} from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => setPosts([...posts, newPost]);
    const postsRender = posts.map(p => <Post title={p.title} description={p.description} post={p.post} key={p.id}/>);

    return(
        <ul>
            {posts.map(p => <li><Link to={`/${p.id}`}><Post title={p.title} key={p.id}/></Link></li>)}
        </ul>
    )
}

export default PostList;