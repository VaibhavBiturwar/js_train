const insertObj = document.querySelector("#insert");
window.addEventListener("keypress", (e) => {
  insertObj.innerHTML = `
  <div>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  
  </div>
  
  `;
});
