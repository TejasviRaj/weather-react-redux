const toLocalDateString = (epoch: number): Date => {
var date: Date = new Date(0);
date.setUTCSeconds(epoch);
return date
}

export default toLocalDateString;