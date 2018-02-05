import React from 'react';
import withStyle from 'react-jss';

const themeColor = '#0097a7';
const daySize = 41;

export const dayStyle = {
    position: 'relative',
    width: daySize,
    height: daySize,
    float: 'left',
    textAlign: 'center',
    cursor: 'pointer',
    lineHeight: '36px',
    transition: 'color 450ms cubic-bezier(0.15, 0.97, 0.37, 1.01)',        
    '&:hover': {
        color: 'white',
    },
    '&:hover $bubble': {
        transform: 'scale(1)',
        opacity: 0.6
    }
};

const style = {
    day: dayStyle,
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
}

const DayBubble = ({ selected, day, onClick, classes }) => (
    <div
        onClick={onClick}
        className={selected ? classes.daySelected : classes.day}
    >
        <span className={classes.bubble}></span>
        <span className={classes.bubbleText}>{ day.format('D') }</span>
    </div>
);

export default withStyle(style)(DayBubble);