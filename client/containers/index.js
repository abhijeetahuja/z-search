import { connect } from 'react-redux';
import { selectAttribute, selectSearchType, fetchAttributes, fetchResults } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = state => ({
    selectedAttribute: state.selectedAttribute,
    selectedSearchType: state.selectedSearchType,
    attributes: state.attributes,
    results: state.results,
});


const mapDispatchToProps = dispatch => ({
    handleSearchType: (searchType) => {
        dispatch(selectSearchType(searchType));
        dispatch(fetchAttributes());
    },
    handleAttribute: (attribute) => {
        dispatch(selectAttribute(attribute));
    },
    handleSearch: (value) => {
        dispatch(fetchResults(value));
    },
});

const AppLink = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppLink;
