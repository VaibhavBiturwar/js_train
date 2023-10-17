const formObj = document.querySelector("form");
formObj.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height value";
    return;
  }
  if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight value";
    return;
  }
  const bmi = parseInt((weight / ((height * height) / 10000)).toFixed(2));
  console.log(height, weight, bmi);

  if (bmi < 18.6) {
    result.innerHTML = `<span>${bmi}</span></br><span>Under Weight</span> `;
  } else if (bmi > 18.6 && bmi < 24.9) {
    result.innerHTML = `<span>${bmi}</span></br><span>Normal Weight</span> `;
  } else {
    result.innerHTML = `<span>${bmi}</span></br><span>OverWeight</span> `;
  }
});

// switch (bmi) {
//   case bmi < 18.6:
//     console.log("Under");
//     break;

//   case bmi > 18.6 && bmi < 24.9:
//     console.log("Normal");
//     break;

//   case bmi > 24.9:
//     console.log("over");
//     break;

//   default:
//     console.log(`Error ${bmi} ${typeof bmi}`);
//     break;
// }
