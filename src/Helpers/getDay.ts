import toLocalDateString from './toLocalDateString';

const dayOfWeek: string[] = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

const getDay = (epoch: number): string => {
    const date: Date = toLocalDateString(epoch);
    let formattedDay: string = dayOfWeek[date.getDay()];
    return formattedDay;
}

export default getDay;