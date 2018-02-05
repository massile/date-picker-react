import React from 'react';
import withStyle from 'react-jss';

const daySize = 41;

const style = {
    week: {
        fontSize: 12,
        lineHeight: '12px',
        color: 'rgba(0, 0, 0, 0.8)',
        padding: '0 14px',
    },
    weekDay: {
        float: 'left',
        width: daySize,
        textAlign: 'center',
    }
};

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const WeekDays = ({ classes }) => (
    <div className={classes.week}>
        { weekDays.map((day, i) => (
            <div className={classes.weekDay} key={i}>
                {day}
            </div>
        )) }
    </div>
);

export default withStyle(style)(WeekDays);