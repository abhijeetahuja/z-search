import request from 'superagent';

export function selectSearchType(searchType) {
    return {
        type: 'SELECT_SEARCH_TYPE',
        searchType,
    };
}

export function selectAttribute(attribute) {
    return {
        type: 'SELECT_ATTRIBUTE',
        attribute,
    };
}

export function setAttributes(attributes) {
    return {
        type: 'SET_ATTRIBUTES',
        attributes,
    };
}

export function setResults(results) {
    return {
        type: 'SET_RESULTS',
        results,
    };
}

export function fetchAttributes() {
    return (dispatch, getState) => {
        const { selectedSearchType } = getState();
        return request.get(`http://localhost:3000/${selectedSearchType}/attributes`)
            .then(response => response.body)
            .then((json) => {
                dispatch(setAttributes(json));
            });
    };
}


export function fetchResults(value) {
    return (dispatch, getState) => {
        const { selectedSearchType, selectedAttribute } = getState();
        return request.get(`http://localhost:3000/${selectedSearchType}`)
            .query({
                [selectedAttribute]: value,
            })
            .then(response => response.body)
            .then((json) => {
                dispatch(setResults(json));
            });
    };
}
