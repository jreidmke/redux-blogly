//sor same thing over here. all i really care about up front is seeing a post. we'll call that get post. whoops sorry, i meant to say GET_POST!!!!!!

import data from './../dummyPosts.json';

function posts(state = data, action) {
    switch(action.type) {
        case 'GET_POST':
            return { ...state, post: action.post}

        case 'EDIT_POST':
            return {...state, post: action.post}


        default:
            console.log(state);
            return state;
    }
}

export default posts;