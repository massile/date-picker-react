import React from 'react';
import withStyle from 'react-jss';
import * as Month from '../modules/month';

const style = {
    control: {
        height: 56,
        lineHeight: '56px',
        textAlign: 'center',
        position: 'relative',
    },
    button: {
        border: 'none',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        outline: 'none',
        height: 56,
        width: 56,
        fontWeight: 800,
    },
    label: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    next: {
        extend: 'button',
        float: 'right',
    },
    prev: {
        extend: 'button',
        float: 'left',
    }
};

const MonthControls = ({ classes, date, onNextClick, onPrevClick }) => {
    const month = date.month();
    const year = date.format('YYYY');

    return (
        <div className={classes.control}>
            <div className={classes.label}>
                { Month.formatted(month, year) }
            </div>
            <button className={classes.next} onClick={onNextClick}>
                &gt;
            </button>
            <button className={classes.prev} onClick={onPrevClick}>
                &lt;
            </button>
        </div>
    );
}

export default withStyle(style)(MonthControls);