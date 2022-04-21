// Assignment code here
var characterLength = 8;
var choiceArr = [];


var lowercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) );
var uppercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
var numberArr = Array( 10 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 48 + i ) );
var specialCharacterArr = ['@','$','%','&','#','?','!','+','=','*','<','>'];

// prompts to generate passcode
function getPrompts() {
  // This resets the choiceArr so it does not save and repaaet the function on the next generate button click
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters)"));

    if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
      alert("The value must be in number form, 8 - 128. Please try again.");
      return false;
    }
    if(confirm("Click okay if you would like lowercase letters in your password.")) {
      choiceArr = choiceArr.concat(lowercaseArr);
    }
    if(confirm("Click okay if you would like Uppercase letters in your password.")) {
      choiceArr = choiceArr.concat(uppercaseArr);
    }
    if(confirm("Click okay if you would like special characters in your password.")) {
      choiceArr = choiceArr.concat(specialCharacterArr);
    }
    if(confirm("Click okay if you would like numbers in your password.")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 