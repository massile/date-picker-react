import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DatePickerAgenda from './DatePickerAgenda';
import withStyles from 'react-jss';

moment.locale('fr');

const style = {
    container: {
        position: 'relative',
    }
};

const DatePicker = ({ value, format, name, onChange, classes }) => {
    const date = moment(value, format);
    return (
        <div className={classes.container}>
            <input type="text" value={ date.format(format) }/>
            <input type="text" name={name} value={ date.format('YYYY-MM-DD') }/>
            <DatePickerAgenda onDayClick={day => onChange(day.format(format))} date={date} />
        </div>
    );  
};

DatePicker.defaultProps = {
    format: 'YYYY-MM-DD'
};

DatePicker.propTypes = {
    value: PropTypes.string.isRequired,
    format: PropTypes.string,
    name: PropTypes.string,
};

export default withStyles(style)(DatePicker);