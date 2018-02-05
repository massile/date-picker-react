import React from 'react';
import withStyle from 'react-jss';

const headerHeight = 100;
const themeColor = '#0097a7';

const styles = {
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
    }
};

const DateHeader = ({ classes, year, dateFormatted }) => (
    <header className={classes.header}>
        <div className={classes.year}>
            {year}
        </div>
        <div className={classes.date}>
            {dateFormatted}
        </div>
    </header>
);

export default withStyle(styles)(DateHeader);