import {Route, Switch, Redirect} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage/> {/**Create HomePage Component */}
            </Route>
            <Route exact path="/new">
                <PostForm/>
            </Route>
            <Route path="/:postId">
                <Post/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes; 