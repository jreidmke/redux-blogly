import { useParams } from 'react-router-dom';
import Post from './Post';

const FilterPost = ({posts}) => {
    const {id} = useParams();

    if(id) {
        const currPost = posts.find(
            p => p.id === id
        );
        return <Post id={currPost}/>;
    }
    return null;
}

export default FilterPost;