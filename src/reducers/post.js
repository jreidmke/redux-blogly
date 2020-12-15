//sor same thing over here. all i really care about up front is seeing a post. we'll call that get post. whoops sorry, i meant to say GET_POST!!!!!!

function post(state = {}, action) {
    switch(action.type) {
        case 'GET_POST':
            return{ ...state, post: action.post}

        default:
            return state;
    }
}

export default post;