var date = Date.now();

console.log(date);

const year = new Date().getFullYear();

console.log(year);

const month = new Date().getMonth() + 1;
console.log(month);

const day = new Date().getDay();

const days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];


console.log(day);

console.log(days[day]);

const hour = new Date().getHours();
console.log(hour);

const minutes = new Date().getMinutes();
console.log(minutes);

const time = new Date().getTime();

console.log(time);

const daycurrent = new Date().getDate();
console.log(daycurrent);
