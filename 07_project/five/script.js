const bodyObj = document.querySelector("body");
let intervalObj = undefined;

document.querySelector("#start").addEventListener("click", () => {
  console.log("start");
  if (intervalObj == undefined) {
    intervalObj = setInterval(changeColor, 500);
  } else {
    console.log("Changer already active");
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  console.log("stop");
  clearInterval(intervalObj);
  intervalObj = undefined;
  bodyObj.style.backgroundColor = "grey";
});

const getR = () => {
  var randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
};

const changeColor = () => {
  const c1 = getR();
  const c2 = getR();
  const c3 = getR();
  // console.log(c1, c2, c3);
  bodyObj.style.backgroundColor = `rgba(${c1},${c2},${c3},1)`;
};
