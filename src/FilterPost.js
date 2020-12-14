import { useParams } from 'react-router-dom';
import PostDetails from './PostDetails';

const FilterPost = ({posts}) => {
    const {id} = useParams();

    if(id) {
        const currPost = posts.find(
            p => p.id === id
        );

        return <PostDetails post={currPost}/>;
    }
    return null;
}

export default FilterPost;