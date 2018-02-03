const initialState = {
    attributes: [],
    results: [],
};

const app = (state = initialState, action) => {
    switch (action.type) {
    case 'SELECT_SEARCH_TYPE': {
        return Object.assign({}, state, { selectedSearchType: action.searchType, attributes: [], results: [] });
    }
    case 'SELECT_ATTRIBUTE': {
        return Object.assign({}, state, { selectedAttribute: action.attribute, results: [] });
    }
    case 'SET_ATTRIBUTES': {
        return Object.assign({}, state, { attributes: action.attributes });
    }
    case 'SET_RESULTS': {
        return Object.assign({}, state, { results: action.results });
    }
    default:
        return state;
    }
};

export default app;
