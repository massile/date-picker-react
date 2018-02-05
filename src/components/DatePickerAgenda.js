import React from 'react';
import withStyle from 'react-jss';
import DateHeader from './DateHeader';
import WeekDays from './WeekDays';
import DayBubble, { dayStyle } from './DayBubble';
import * as Month from '../modules/month';

const daySize = 41;

const style = {
    datePicker: {
        position: 'absolute',
        top: '100%',
        zIndex: 5,
        width: 315,
        backgroundColor: 'white',
        boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
    },
    day: dayStyle,
    days: {
        margin: '14px',
    }
};

const DatePickerAgenda = ({ date, onDayClick, classes }) => {
    const month = date.month();
    const year = date.format('YYYY');
    const dateFormatted = date.format('dddd DD MMM');

    return (
        <div className={classes.datePicker}>
            <DateHeader year={year} dateFormatted={dateFormatted} />
            <WeekDays />
            <div className={classes.days}>
                <div
                    className={classes.day}
                    style={{ width: Month.weekStart(month, year) * daySize + 'px' }}
                ></div>
                {
                    Month.days(month, year).map((day, i) => (
                        <DayBubble
                            onClick={() => onDayClick(day)}
                            day={day}
                            selected={day.unix() === date.unix()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default withStyle(style)(DatePickerAgenda);