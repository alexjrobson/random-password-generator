const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");
const generateBtn = document.getElementById("generate");
const resultDiv = document.getElementById("result");

function generatePassword() {
  let length = parseInt(lengthInput.value);

  if (isNaN(length) || length < 8 || length > 32) {
    alert("Please enter a valid length between 8 and 32.");
    return;
  }

  let charPool = "";
  if (uppercaseCheckbox.checked) charPool += UPPERCASE;
  if (lowercaseCheckbox.checked) charPool += LOWERCASE;
  if (numbersCheckbox.checked) charPool += NUMBERS;
  if (specialCheckbox.checked) charPool += SPECIAL;

  if (charPool.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  resultDiv.textContent = password;
}

generateBtn.addEventListener("click", generatePassword);
