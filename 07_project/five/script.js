const bodyObj = document.querySelector("body");
let intervalObj = undefined;

document.querySelector("#start").addEventListener("click", () => {
  console.log("start");
  if (intervalObj == undefined) {
    // intervalObj = setInterval(changeColor, 500);
    // intervalObj = setInterval(changeColorHex, 500);
    intervalObj = setInterval(changeColorAlpha, 500);
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

const getR = (val) => {
  var randomNumber = Math.floor(Math.random() * val);
  return randomNumber;
};

const changeColor = () => {
  const c1 = getR(256);
  const c2 = getR(256);
  const c3 = getR(256);
  // console.log(c1, c2, c3);
  bodyObj.style.backgroundColor = `rgba(${c1},${c2},${c3},1)`;
};

const changeColorHex = () => {
  const hex = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[getR(16)];
  }
  bodyObj.style.backgroundColor = hexCode;
};

const changeColorAlpha = () => {
  const c1 = getR(256);
  const c2 = getR(256);
  const c3 = getR(256);
  const c4 = Math.random();
  bodyObj.style.backgroundColor = `rgba(${c1},${c2},${c3},${c4})`;
};
