import React from 'react';
import withStyle from 'react-jss';
import * as Month from '../modules/month';

const headerHeight = 100;
const themeColor = '#0097a7';
const daySize = 41;
const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const style = {
    datePicker: {
        position: 'absolute',
        top: '100%',
        zIndex: 5,
        width: 315,
        backgroundColor: 'white',
        boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
    },
    header: {
        backgroundColor: themeColor,
        color: 'white',
        padding: 20,
        height: headerHeight
    },
    year: {
        opacity: 0.7,
        marginBottom: 10,
        lineHeight: '16px',
    },
    date: {
        fontSize: 32,
        lineHeight: '32px'
    },
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
    },
    days: {
        margin: '14px',
    },
    day: {
        position: 'relative',
        width: daySize,
        height: daySize,
        float: 'left',
        textAlign: 'center',
        cursor: 'pointer',
        lineHeight: '36px',
        transition: 'all 450ms cubic-bezier(0.15, 0.97, 0.37, 1.01)',        
        '&:hover': {
            color: 'white',
        },
        '&:hover $bubble': {
            transform: 'scale(1)',
            opacity: 0.6
        }
    },
    daySelected: {
        extend: 'day',
        color: 'white',
        '& $bubble': {
            transform: 'scale(1)',
            opacity: 1
        }
    },
    bubble: {
        position: 'absolute',
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: themeColor,
        top: 2,
        left: 2,
        transition: 'all 450ms cubic-bezier(0.15, 0.97, 0.37, 1.01)',
        transform: 'scale(0)',
        opacity: 0,
    },
    bubbleText: {
        position: 'relative',
    }
};

const DatePickerAgenda = ({ date, classes }) => {
    const month = date.month();
    const year = date.format('YYYY');
    const dateFormatted = date.format('dddd DD MMM');

    return (
        <div className={classes.datePicker}>
            <header className={classes.header}>
                <div className={classes.year}>
                    {year}
                </div>
                <div className={classes.date}>
                    {dateFormatted}
                </div>
            </header>
            <div className={classes.week}>
                { weekDays.map((day, i) => (
                    <div className={classes.weekDay} key={i}>
                        {day}
                    </div>
                )) }
            </div>
            <div className={classes.days}>
                <div
                    className={classes.day}
                    style={{ width: Month.weekStart(month, year) * daySize + 'px' }}
                ></div>
                {
                    Month.days(month, year).map((day, i) => (
                        <div className={date.unix() === day.unix() ? classes.daySelected : classes.day}>
                            <span className={classes.bubble}></span>
                            <span className={classes.bubbleText}>{ day.format('D') }</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default withStyle(style)(DatePickerAgenda);