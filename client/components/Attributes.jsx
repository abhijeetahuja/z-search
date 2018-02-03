import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

const Attributes = ({ attributes, selectedAttribute, handleAttribute }) => (
    <div>
        <h3>Select search attribute</h3>
        <nav>
            {attributes.map(attribute => (
                <a
                    key={attribute}
                    onClick={() => {
                        handleAttribute(attribute);
                    }}
                    className={classNames({
                        selected: attribute === selectedAttribute,
                    })
                    }>{attribute}</a>
            ))}
        </nav>
    </div>
);

Attributes.propTypes = {
    selectedAttribute: PropTypes.string,
    attributes: PropTypes.arrayOf(PropTypes.string),
    handleAttribute: PropTypes.func.isRequired,
};

export default Attributes;
