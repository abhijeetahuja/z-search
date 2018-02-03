import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} placeholder={this.props.placeholder} onChange={evt => this.updateInputValue(evt)} />
                <button onClick={
                    () => {
                        this.props.onSearch(this.state.inputValue);
                    }
                } disabled={!this.props.placeholder}>Search</button>
            </div>
        );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value,
        });
    }

    getInputValue() {
        return this.state.inputValue;
    }
}

Input.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Input;
