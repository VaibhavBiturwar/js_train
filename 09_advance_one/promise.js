// ? Promise 1
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set Timeout Completed");
//     resolve();
//   }, 2000);
// });
// promise1.then(() => {
//   console.log("Promise1 then()");
// });

// ? Promise 2
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set Timeout Completed");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("Promise2 then()");
// });

// ? Promise 3 | Return data in then
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set Timeout Completed");
//     const data = {
//       date: "20/10/2023",
//       time: "01:30 PM",
//     };
//     resolve(data);
//   }, 1000);
// });
// promise3.then((data) => {
//   console.log("Promise3 then() ", data);
// });

// ? Promise 4 | Return data in reject
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set Timeout Completed");
//     const error = true;
//     if (!error) resolve({ status: 200 });
//     else reject({ status: 400 });
//   }, 1000);
// });
// promise4
//   .then((data) => {
//     console.log("Promise4 then() ", data);
//   })
//   .catch((data) => {
//     console.log("Promise4 catch() ", data);
//   });

// ? Promise 5 | Callback chaining
// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = {
//       name: {
//         fname: "Vaibhav",
//         lname: "Biturwar",
//       },
//     };
//     resolve(data);
//   }, 1000);
// });
// promise5
//   .then((data) => {
//     console.log("First then: ", data);
//     return data.name;
//   })
//   .then((data) => {
//     console.log("Second then: ", data);
//     return data.fname;
//   })
//   .then((data) => {
//     console.log("Third then: ", data);
//   })
//   .catch((error) => {
//     console.log("Error: ", { error });
//   });

// ? Promise 6 | Handling promise with async-await
// const promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     true ? resolve("Success") : reject("Error Occurred");
//   }, 1000);
// });
// const checkPromise = async () => {
//   try {
//     const response = await promise6;
//     console.log({ response });
//   } catch (error) {
//     console.log(error);
//   }
// };
// checkPromise();

// ? Fetch api using promise
const fetchUsers = async () => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchUsers();
