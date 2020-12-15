import data from '../dummyPosts.json';
import axios from "axios";

// function makeTitles(data) {
//     const postKeys = Object.keys(data);
//     const titleArr = postKeys.map(key => ({title: data[key].title, id: data[key].id}));
//     return titleArr;
// }
// const INITIAL_STATE = makeTitles({});

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

function getTitlesFromDB() {
    return async function(dispatch) {
        const resp = await axios.get(API_URL);
        return dispatch(getTitles(resp.data));
    };
};

function getTitles(titles) {
    return {
        type: 'SHOW_TITLES',
        titles
    };
};

function titles(state = [], action) {
    switch(action.type) {
        case 'SHOW_TITLES':
            return([...action.titles]);

        case 'ADD_TITLE':
            return([...state, action.post]);

        case 'EDIT_TITLE':
            console.log(action.post);
            const titles = state.map(t => t.id === action.post.id ? {title: action.post.title, description: action.post.description, id: action.post.id, votes: 0} : t);
            console.log(titles);
            return titles;

        case 'REMOVE_TITLE':
            console.log(state.filter(t => t.id !== action.post.id));
            return state.filter(t => t.id !== action.post.id)


        default:
            return state;
    }
}

export default titles;
export {getTitlesFromDB};