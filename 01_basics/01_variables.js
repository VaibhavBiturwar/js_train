const accountId = 1265;
let accountEmail = "asd@asd.com";
var accountPass = "1232456";
accountCity = "Pune"; // it works but should be avoided;
let accountState;
// accountId =2 // cannot be updated because declared as constant;
accountEmail = "zxc@xc.com";
accountPass = "123edc";
accountCity="Raipur";
console.table([accountId,accountEmail,accountPass,accountCity, accountState])

/*
var-> global scope / avoid using
let-> works in blocked scope / to be used on priority
*/

