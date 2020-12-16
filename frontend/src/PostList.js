import {Link} from 'react-router-dom';
import Post from './Post';
import {getTitlesFromDB} from './reducers/titles';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './PostList.css';

const PostList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const titles = useSelector(store => store.titles);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getTitles() {
            await dispatch(getTitlesFromDB());
            setIsLoading(false);
        }
        if(isLoading) {
            setTimeout(getTitles, 50);
        }
    }, [dispatch, isLoading]);

    if (isLoading) return <b>Gathering Posts</b>;


    return(
        <ul>
            {titles.map(t => <li key={t.id}><button>UPVOTE</button><Link to={`/${t.id}`}><Post title={t.title} key={t.id} votes={t.votes}/></Link><button>DOWNVOTE</button></li>)}
        </ul>
    )
}

export default PostList;