//sor same thing over here. all i really care about up front is seeing a post. we'll call that get post. whoops sorry, i meant to say GET_POST!!!!!!

import data from './../dummyPosts.json';

function posts(state = data, action) {
    console.log(state);
    let p = state[action.postId];

    switch(action.type) {
        case 'GET_POST':
            return { ...state, post: action.post}

        case 'EDIT_POST':
            console.log(action.post);
            return {...state, post: action.post}

        case 'ADD_POST':
            console.log(action.post);
            console.log({...state, [action.post.id]: {...action.post, comments: []}})
            return {...state, [action.post.id]: {...action.post, comments: []}};

        case 'REMOVE_POST':
            console.log(action.post);
            let posts = {...state};
            delete posts[action.post.id];
            console.log(posts);
            return posts;

        case 'ADD_COMMENT':
            console.log(action.comment);
            let po = {...state, [action.postId]: {...p, comments: [...p.comments, action.comment]}};
            console.log(po);
            return {...state, [action.postId]: {...p, comments: [...p.comments, action.comment]}};

        case 'REMOVE_COMMENT':
            console.log(action.commentId);
            console.log(action.postId);
            console.log(state);
            let pos = {...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}};
            console.log(pos);
            return {...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}};

        default:
            console.log(state);
            return state;
    }
}

export default posts;