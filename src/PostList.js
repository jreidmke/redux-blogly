import {Link} from 'react-router-dom';
import Post from './Post';
import data from './dummyPosts.json';
import { useSelector } from "react-redux";

const PostList = () => {
    const titles = useSelector(store => store.titles);
    // const dispatch = useDispatch();
    // const display = dispatch({type: 'SHOW_TITLES'});
    // console.log(display);
    // console.log(titles);
    // // // const dispatch = useDispatch();
    // // // const t =
    return(
        <ul>
            {titles.map(t => <li key={t.id}><Link to={`/${t.id}`}><Post title={t.title} key={t.id}/></Link></li>)}
        </ul>
    )
}

export default PostList;