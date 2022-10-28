// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
  var result = '';
  var charactersLength = characters.length;

  //generates a random string
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var characters = '';
  var lowercase = 'zxcvbnmlkjhgfdsaqwertyuiop'
  var uppercase = 'ZXCVBNMLKJHGFDSAQWERTYUIOP'
  var numeric = '123457890'
  var special = '~!@#$%^&*()-=/?'
  let question1 = prompt("How long would you want your password to be?");
  if(question1 === null) {
    return
  }
  queston1 = Number(question1)

  while (!(question1 >= 8 && question1 <= 128)) {
    alert("Length of password MUST BE at least 8 characters and no more than 128 characters. Please enter a number from 8 to 128.")
    question1 = prompt("How long would you want your password to be?")
    if(question1 === null) {
      return
    }
  }
  //a prompt should be sent out to the user asking them to 
  //confirm whether or not to include lowercase, uppercase, 
  //numeric, and/or special characters
  let question2 = prompt("Would you like to include lowercase characters? y/n");
  if(question2 === null) {
    return
  }
  while (question2 !== "y" && question2 !== "n") {
    alert("MUST BE y or n (y for yes, n for no)")
    question2 = prompt("Would you like to include lowercase characters? y/n");
    if(question2 === null) {
      return
    }
  }
  if (question2 === "y") {
    characters += lowercase
  }
  let question3 = prompt("Would you like to include uppercase characters? y/n");
  if(question3 === null) {
    return
  }
  while (question3 !== "y" && question3 !== "n") {
    alert("MUST BE y or n (y for yes, n for no)")
    question3 = prompt("Would you like to include uppercase characters? y/n");
    if(question3 === null) {
      return
    }
  }
  if (question3 === "y") {
    characters += uppercase
  }
  let question4 = prompt("Would you like to include numeric characters? y/n");
  if(question4 === null) {
    return
  }
  while (question4 !== "y" && question4 !== "n") {
    alert("MUST BE y or n (y for yes, n for no)")
    question4 = prompt("Would you like to include numeric characters? y/n");
    if(question4 === null) {
      return
    }
  }
  if (question4 === "y") {
    characters += numeric
  }
  let question5 = prompt("Would you like to include special characters? y/n");
  if(question5 === null) {
    return
  }
  while (question5 !== "y" && question5 !== "n") {
    alert("MUST BE y or n (y for yes, n for no)")
    question5 = prompt("Would you like to include special characters? y/n");
    if(question5 === null) {
      return
    }
  }
  if (question5 === "y") {
    characters += special

  }
  if (question2 === "n" && question3 === "n" && question4 === "n" && question5 === "n") {
    alert("MUST ANSWER y TO AT LEAST ONE CHARACTER TYPE REQUIREMENT QUESTION");
    return
  }
  var password = generatePassword(question1, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


