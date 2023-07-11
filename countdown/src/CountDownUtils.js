import dayjs from 'dayjs'

export function getRemainingTsMl(timestamp) {
const timestampDayjs = dayjs(timestamp)
const nowDayjs = dayjs()


    return {
        seconds:getSec(nowDayjs, timestampDayjs),
        minutes: getMin(nowDayjs, timestampDayjs),
        hours: getHours(nowDayjs, timestampDayjs),
        days: getSDays(nowDayjs, timestampDayjs)
    }
}

function getSec(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return seconds
}

function getMin(nowDayjs,timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return minutes 
}

function getHours(nowDayjs,timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
    return hours 
}

function getSDays(nowDayjs,timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days') 
    return days   
}