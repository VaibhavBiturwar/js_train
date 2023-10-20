document.querySelector("#listButton").addEventListener("click", async () => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((itemData) => {
        const add = `${itemData.address.suite}, ${itemData.address.street}, ${itemData.address.city}
        ${itemData.address.zipcode}  `;

        const cardListObj = document.querySelector("#cardsList");

        const newData = `
       <div class="cardContainer">
            <div class="username" id="username">@${itemData.username}</div>
            <ul class="listContainer">
                <div class="details">${itemData.name}</div>
                <div class="details" id="email">${itemData.email}</div>
                <div class="details" id="phone"> ${itemData.phone}</div>
                <div class="details" id="address">${add}</div>
                <div class="details" id="company">${itemData.company.name}</div>
                <div class="details" id="web">${itemData.website}</div>
            </ul>
        </div>
      `;
        cardListObj.innerHTML += newData;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
