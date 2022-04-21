// Assignment code here
var choiceArr = [];
var characterLength = 8;


// var lowercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) );
// var uppercaseArr = Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
// var numberArr = Array( 10 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 48 + i ) );
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacterArr = ['@','$','%','&','#','?','!','+','=','*','<','>'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

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
    var randomindex = math.floor(math.random() * choiceArr.length);
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
