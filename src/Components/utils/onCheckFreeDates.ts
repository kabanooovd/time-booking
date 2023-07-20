import { onFormatDate } from "./onHandleDatesByTime";

export const _onCheckFreeDates = (date: string, freeDates: string[]): boolean => {
    const datesList = freeDates.map(date => new Date(date).toDateString())
    const currentDateWithNoTime = new Date(date).toDateString();
    return datesList.includes(currentDateWithNoTime)
}

export const onCheckFreeDates = (date: string, freeDates: string[]): boolean => {
    const datesList = freeDates.map(date => onFormatDate(date))
    const currentDateWithNoTime = onFormatDate(date);
    return datesList.includes(currentDateWithNoTime)
}