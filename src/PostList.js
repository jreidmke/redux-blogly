import {useState} from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import data from './dummyPosts.json';

const PostList = () => {
    const postKeys = Object.keys(data);
    return(
        <ul>
            {postKeys.map(key => <li><Link to={`/${key}`}><Post title={data[key].title}key={key}/></Link></li>)}
        </ul>
    )
}

export default PostList;