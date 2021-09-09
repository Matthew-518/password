// Assignment code here


var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var SpecialChar =  ['+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
 
var generatePassword = function() {
  var password = "";
  //return getPassword;
}

function writePassword() {
    
  //passwordText.value = getPassword

  var getPassword = [];
  
  var chosenCharacters = [];

  var passwordLength = prompt("How Long?");
  if(passwordLength < 8 || passwordLength > 128) {
    return alert("try again");
  }
  
  var useLowerCase = confirm("lowercase?");
  if (useLowerCase === true) {
      chosenCharacters = chosenCharacters.concat(lowerCase);
  }

  var useUpperCase = confirm("uppercase?");
    if (useUpperCase === true) {
    chosenCharacters = chosenCharacters.concat(upperCase);
  }
  var useNumeric = confirm("numeric?");
    if (useNumeric === true) {
    chosenCharacters = chosenCharacters.concat(numeric);
    }
  var useSpecialChar = confirm("special character?");
    if (useSpecialChar === true) {
      chosenCharacters = chosenCharacters.concat(SpecialChar);
    }

    //var getPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      
     let currentChar = chosenCharacters[Math.floor(Math.random() * (chosenCharacters.length))];
     getPassword.push(currentChar)
    }
  
    passwordText.value = getPassword.join(' ');
    //var password = getPassword
    return getPassword;
    //console.log(getPassword);
  } 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//var password = generatePassword()
//passwordText.value = password
 //removeComma();
  //generatePassword();
   //console.log(getPassword);