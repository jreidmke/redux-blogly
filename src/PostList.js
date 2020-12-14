import {useState} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import data from './dummyPosts.json';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => setPosts([...posts, newPost]);
    const postsRender = data.map(p => <Post title={p.title} description={p.description} post={p.post} key={p.id}/>);

    return(
        <ul>
            {data.map(p => <li><Link to={`/${p.id}`}><Post title={p.title} key={p.id} id={p.id}/></Link></li>)}
        </ul>
    )
}

export default PostList;