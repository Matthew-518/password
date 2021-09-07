// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long?"); 
  // if passwordLength = 
  
  var lowerCase = confirm("lowercase?");

  var uppercase = confirm("uppercase?");
  var numeric = confirm("numeric");
  var specialChar = confirm("special character");

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
