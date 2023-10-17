const bodyObj = document.body;
const buttonList = document.querySelectorAll(".button");

buttonList.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    // bodyObj.style.backgroundColor = button.getAttribute('id');
    bodyObj.style.backgroundColor = e.target.id;
  });
});
