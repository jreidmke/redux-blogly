//so right now, all we want titles to do is be displayed. that's pretty easy. we'll import in our json and show it.

import data from '../dummyPosts.json';

function makeTitles(data) {
    const postKeys = Object.keys(data);
    const titleArr = postKeys.map(key => ({title: data[key].title, id: data[key].id}));
    return titleArr;
}
const INITIAL_STATE = makeTitles(data);

function titles(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_TITLES':
            return(state)

        case 'ADD_TITLE':
            return([...state, action.post]);

        default:
            return state;
    }
}

export default titles;