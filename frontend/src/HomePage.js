import PostList from './PostList';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
    return(
        <div>
            <PostList key={uuidv4()}/>
        </div>
    )
};

export default HomePage;