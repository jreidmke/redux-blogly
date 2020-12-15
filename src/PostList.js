import {Link} from 'react-router-dom';
import Post from './Post';
import data from './dummyPosts.json';
import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
    const titles = useSelector(store => store);
    console.log(titles);
    // const dispatch = useDispatch();
    // const t =

    const postKeys = Object.keys(data);
    return(
        <ul>
            {postKeys.map(key => <li key={key}><Link to={`/${key}`}><Post title={data[key].title} key={key}/></Link></li>)}
        </ul>
    )
}

export default PostList;