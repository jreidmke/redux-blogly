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

function removePostFromDB(id) {
    return async function (dispatch) {
        await axios.delete(`${API_URL}/${id}`);
        return dispatch(removePost(id));
    }
}

function removePost(id) {
    return {
        type: 'REMOVE_POST',
        id
    };
}

function addCommentToDB(postId, text) {
    console.log(text);
    console.log(postId);
    return async function (dispatch) {
        const resp = await axios.post(`${API_URL}/${postId}/comments/`, { text });
        return dispatch(addComment(postId, resp.data));
    }
}

function addComment(postId, text) {
    return {
        type: "ADD_COMMENT",
        postId,
        text
    };
};

function deleteCommentFromDB(postId, commentId) {
    return async function (dispatch) {
        await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
        return dispatch(deleteComment(postId, commentId));
      };
}

function deleteComment(postId, commentId) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentId
    };
}

function sendVoteToDB(id, direction) {
    return async function(dispatch) {
        const resp = await axios.post(`${API_URL}/${id}/vote/${direction}`);
        return dispatch(vote(id, resp.data.votes));
    };
}

function vote(postId, votes) {
    return {
        type: 'VOTE',
        postId,
        votes
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
            delete posts[action.id];
            // console.log(posts);
            return posts;

        case 'ADD_COMMENT':
            // console.log(action.comment);
            // console.log({...state, [action.postId]: {...p, comments: [...p.comments, action.comment]});
            return {...state, [action.postId]: {...p, comments: [...p.comments, action.comment]}};

        case 'REMOVE_COMMENT':
            // console.log(action.commentId);
            // console.log(action.postId);
            // console.log(state);
            // console.log({...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}});
            return {...state, [action.postId]: {...p, comments: p.comments.filter(c => c.id !== action.commentId)}};

        case 'VOTE':
            return {...state, [action.postId]: {...p, votes: action.votes}};

        default:
            // console.log(state);
            return state;
    }
}

export default posts;
export {getPostFromDB, editPostInDB, sendPostToDB, removePostFromDB, addCommentToDB, deleteCommentFromDB, sendVoteToDB};