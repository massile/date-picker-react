import React from 'react';
import withStyle from 'react-jss';

const headerHeight = 100;
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
        backgroundColor: '#0097a7',
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
    }
};

const DatePickerAgenda = ({ date, classes }) => {
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
        </div>
    );
}

export default withStyle(style)(DatePickerAgenda);