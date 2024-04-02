const accountId = 844505
let accountEmail = "123@google.com"
var accountPassword = "12345" 
accountCity = "Bihar"
let accountState;

// accountId = 5 // Not allowed 

accountEmail = "pk@example.com"
accountPassword = "212121"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);