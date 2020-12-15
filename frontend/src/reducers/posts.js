import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

function getPostFromDB(id) {
    return async function (dispatch) {
        const resp = await axios.get(`${API_URL}/${id}`);
        return dispatch(getPost(resp.data));
    }
}

function getPost(post) {
    console.log(post);
    return {
        type: 'GET_POST',
        post
    };
};

function editPostInDB(id, title, description, body) {
    return async function(dispatch) {
        const resp = await axios.put(`${API_URL}/${id}`, {
            title,
            description,
            body
          });
          console.log(resp.data);
          return dispatch(editPost(resp.data));
    }
}

function editPost(post) {
    return {
        type: 'EDIT_POST',
        post
    };
}

function sendPostToDB(title, description, body) {
    console.log(title)
    return async function(dispatch) {
        const resp = await axios.post(`${API_URL}`, {
            title,
            description,
            body
        });

        return dispatch(addPost(resp.data));
    };
};

function addPost(post) {
    console.log(post);
    return {
        type: 'ADD_POST',
        post
    }
}

function posts(state = {}, action) {
    // console.log(state);
    let p = state[action.postId];

    switch(action.type) {
        case 'GET_POST':
            // console.log(state);
            // console.log(action.post);
            // console.log({ ...state, [action.post.id]: action.post });
            return { ...state, [action.post.id]: action.post }

        case 'EDIT_POST':
            // console.log(action.post);
            // console.log({...state, [action.post.id]: {...action.post, comments: []}})
            return {...state, [action.post.id]: {...action.post, comments: []}}

        case 'ADD_POST':
            // console.log(action.post);
            // console.log({...state, [action.post.id]: {...action.post, comments: []}})
            return {...state, [action.post.id]: {...action.post, comments: []}};

        case 'REMOVE_POST':
            // console.log(action.post);
            let posts = {...state};
            delete posts[action.post.id];
            // console.log(posts);
            return posts;

        case 'ADD_COMMENT':
            // console.log(action.comment);
            let po = {...state, [action.postId]: {...p, comments: [...p.comments, action.comment]}};
            // console.log(po);
            return {...state, [action.postId]: {...p, comments: [...p.comments, action.comment]}};

        case 'REMOVE_COMMENT':
            // console.log(action.commentId);
            // console.log(action.postId);
            // console.log(state);
            let pos = {...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}};
            // console.log(pos);
            return {...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}};

        default:
            // console.log(state);
            return state;
    }
}

export default posts;
export {getPostFromDB, editPostInDB, sendPostToDB};