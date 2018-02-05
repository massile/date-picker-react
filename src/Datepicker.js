import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class DatePicker extends Component {
    static defaultProps = {
        format: 'YYYY-MM-DD'
    }
    
    static propTypes = {
        value: PropTypes.string.isRequired,
        format: PropTypes.string,
        name: PropTypes.string,
    };
    
    render() {
        const { value, format, name } = this.props;
        const date = moment(value, format);

        return (
            <div>
                <input type="text" value={ date.format(format) }/>
                <input type="text" name={name} value={ date.format('YYYY-MM-DD') }/>
            </div>
        );  
    }
}

export default DatePicker;