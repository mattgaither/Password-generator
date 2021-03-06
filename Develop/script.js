// Assignment code here
var choiceArr = [];
var characterLength = 8;


var lowercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) );
var uppercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
var numberArr = Array( 10 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 48 + i ) );
var specialCharacterArr = ['@','$','%','&','#','?','!','+','=','*','<','>'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromopts = getPrompt();
  var passwordText = document.querySelector("#password");

  if (correctPromopts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } 
  else {
   passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomindex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomindex];
  }
  return password;
}

// prompts to generate passcode
function getPrompt() {
  // This resets the choiceArr so it does not save and repaaet the function on the next generate button click
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters)"));

    if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
      alert("The value must be in number form, 8 - 128. Please try again.");
      return false;
    }
    if(confirm("Click 'Ok' if you would like Lowercase letters in your password.")) {
      choiceArr = choiceArr.concat(lowercaseArr);
    }
    if(confirm("Click 'Ok' if you would like Uppercase letters in your password.")) {
      choiceArr = choiceArr.concat(uppercaseArr);
    }
    if(confirm("Click 'Ok' if you would like special characters in your password.")) {
      choiceArr = choiceArr.concat(specialCharacterArr);
    }
    if(confirm("Click 'Ok' if you would like numbers in your password.")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}
