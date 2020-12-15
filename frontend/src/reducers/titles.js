import data from '../dummyPosts.json';

function makeTitles(data) {
    const postKeys = Object.keys(data);
    const titleArr = postKeys.map(key => ({title: data[key].title, id: data[key].id}));
    return titleArr;
}
const INITIAL_STATE = makeTitles({});

function titles(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_TITLES':
            return(state)

        case 'ADD_TITLE':
            return([...state, action.post]);

        case 'EDIT_TITLE':
            console.log(action.post.title);
            const titles = state.map(t => t.id === action.post.id ? action.post : t);
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