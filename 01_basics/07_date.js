// Date
// default Jan 01 1970

const dt = new Date();
// console.log(dt); // 2023-10-03T12:12:21.416Z
// console.log(dt.toString()); // Tue Oct 03 2023 12:13:28 GMT+0000 (Coordinated Universal Time)
// console.log(dt.toDateString()); // Tue Oct 03 2023
// console.log(dt.toISOString()); // 2023-10-03T12:17:10.686Z
// console.log(dt.toJSON()); // 2023-10-03T12:17:30.031Z
// console.log(dt.toLocaleDateString()); // 10/3/2023
// console.log(dt.toLocaleDateString("en-IN")); // 3/10/2023

const myDt = new Date(2023, 0, 20); // 2024-01-20T00:00:00.000Z.   (YYYY, MM, DD)  MM=> starts with 0
// console.log(myDt.toDateString()); // Fri Jan 20 2023

const myDateTime = new Date(2023, 0, 20, 23, 20, 5); // (YYYY, MM, DD, hh, mm, ss)
// console.log(myDateTime.toLocaleString()); // 1/20/2023, 10:20:05 AM

const customDt = new Date("10-03-2023"); //  (MM-DD-YYYY)
// console.log(customDt.toLocaleString()); // 10/3/2023, 12:00:00 AM
// console.log(customDt.toString()); // Tue Oct 03 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(customDt.getTime()); // 1696291200000

const myTimeStamp = Date.now();
// console.log({ myTimeStamp });

// console.table([
//   { val: dt },
//   { date: dt.getDate() },
//   { day: dt.getDay() },
//   { fullYear: dt.getFullYear() },
//   { hours: dt.getHours() },
//   { ms: dt.getMilliseconds() },
//   { mins: dt.getMinutes() },
//   { month: dt.getMonth() },
//   { sec: dt.getSeconds() },
//   { time: dt.getTime() },
// ]);

// Local String
console.log(
  dt.toLocaleString("default", {
    // dayPeriod: "long", // noon
    // dateStyle: "short", // 10/3/23
    // timeStyle: "short", // 12:51 PM
    weekday: "long", // Tuesday
  })
);
