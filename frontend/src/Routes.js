import {Route, Switch, Redirect} from 'react-router-dom';
import data from './dummyPosts.json';

//components
import HomePage from './HomePage';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Post from './Post';
import PostForm from './PostForm';
import FilterPost from './FilterPost';
import PostDetails from './PostDetails';
import NewPost from './NewPost';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/new">
                <PostForm/>
            </Route>
            {/* <Route path="/:id">
                <FilterPost posts={data}/>
            </Route> */}
            <Route path="/:id">
                <PostDetails/>
            </Route>
            <Route exact path="/new">
                <NewPost />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;