import toLocalDateString from './toLocalDateString';

const months: string[] = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const getFormattedFullDate = (epoch: number): string => {
    const date: Date = toLocalDateString(epoch);
    let formattedDate: string = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()

    return formattedDate
}
export default getFormattedFullDate;
