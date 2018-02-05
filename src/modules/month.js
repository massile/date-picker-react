import moment from 'moment';
import {extendMoment} from 'moment-range';

extendMoment(moment);

export const weekStart = (month, year) => (
    moment([year, month]).weekday()
);

export const monthEndDay = (month, year) => (
    moment([year, month]).endOf('month')
);

export const days = (month, year) => {
    const range = moment.range(moment([year, month]), monthEndDay(month, year))
    return Array.from(range.by('days'));
}

export const formatted = (month, year) => {
    return moment([year, month]).format('MMMM YYYY');
};