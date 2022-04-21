var characterLength = 8;
var choiceArr = [];




// Assignment code here

// prompts to generate passcode
function getPrompts() {
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters)"));

    if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
      alert("The value must be in number form, 8 - 128. Please try again.");
      return false;
    }

    if(confirm("Click okay if you would like lowercase letters in your password.")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if(confirm("Click okay if you would like Uppercase letters in your password.")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if(confirm("Click okay if you would like special characters in your password.")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
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
 