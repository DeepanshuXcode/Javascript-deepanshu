const accountID = 123456
let accountEmail = "deepanshu@google.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

//accountID = 8  // not allowed

//accountID = 9876
accountEmail = "deep@gmail.com"
accountPassword = 7653
accountCity = "Mathura"

//console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountID,accountPassword,accountCity,accountEmail,accountState])
