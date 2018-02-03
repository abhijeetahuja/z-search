import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Attributes from './Attributes.jsx';
import Input from './Input.jsx';

const types = [
    {
        id: 'users',
        name: 'Users',
    },
    {
        id: 'tickets',
        name: 'Tickets',
    },
    {
        id: 'orgs',
        name: 'Organizations',
    },
];

const App = ({
    selectedSearchType,
    selectedAttribute,
    attributes,
    handleSearchType,
    handleAttribute,
    handleSearch,
    results,
}) => (
    <div>
        <h1>Zendesk Search</h1>
        <nav>
            {types.map(type => (
                <a
                    key={type.id}
                    onClick={() => {
                        handleSearchType(type.id);
                    }}
                    className={classNames({
                        selected: type.id === selectedSearchType,
                    })
                    }>
                    {type.name}
                </a>
            ))}
        </nav>
        {attributes.length > 0 &&
        <div>
            <Attributes selectedAttribute={selectedAttribute} attributes={attributes} handleAttribute={handleAttribute} />
            <br/>
            <Input placeholder={selectedAttribute} onSearch={handleSearch}/>

            <h2>Results</h2>
            <nav>
                {results.map(result => (
                    <div key={result._id}>{<pre>{JSON.stringify(result, null, 2) }</pre>}<hr/></div>
                ))}
            </nav>
        </div>}
    </div>
);

App.propTypes = {
    selectedSearchType: PropTypes.string,
    selectedAttribute: PropTypes.string,
    attributes: PropTypes.arrayOf(PropTypes.string),
    handleSearchType: PropTypes.func.isRequired,
    handleAttribute: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    results: PropTypes.array,
};

export default App;
